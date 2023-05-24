package talkiewalkie

import cats.effect.std.{AtomicCell, Queue}
import cats.effect.syntax.all.*
import cats.effect.*
import cats.syntax.all.*
import com.comcast.ip4s.{ipv4, port}
import fs2.concurrent.Topic
import fs2.{Chunk, Pipe, Stream}
import fs2.io.file.{Files, Path}
import io.circe.generic.auto.*
import io.circe.jawn
import io.circe.syntax.*
import org.http4s.Method.GET
import org.http4s.dsl.io.*
import org.http4s.ember.server.EmberServerBuilder
import org.http4s.server.Server
import org.http4s.server.websocket.WebSocketBuilder2
import org.http4s.websocket.WebSocketFrame
import org.http4s.websocket.WebSocketFrame.{Binary, Text}
import org.http4s.{HttpRoutes, Response}
import talkiewalkie.Command.*
import talkiewalkie.WebpToWav.convert

import java.time.Instant
import java.time.temporal.ChronoUnit
import java.util.UUID
import scala.concurrent.duration.*

object Main extends IOApp {

  def run(args: List[String]): IO[ExitCode] = {
    for {
      speechService <- GoogleSpeechService.connect
      service <- Service.create
      server: Stream[IO, Server] = Stream.resource(serverResource(service, speechService) >> Resource.never)
      _ <- server.compile.drain
    } yield ExitCode.Success
  }

  private def serverResource(
      service: Service,
      speechService: GoogleSpeechService
  ): Resource[IO, Server] =
    EmberServerBuilder
      .default[IO]
      .withHost(ipv4"0.0.0.0")
      .withPort(port"8181")
      .withIdleTimeout(2.days)
      .withHttpWebSocketApp(ws =>
        routes(
          service,
          speechService,
          ws
        ).orNotFound
      )
      .build

  private def routes(
      service: Service,
      speechService: GoogleSpeechService,
      ws: WebSocketBuilder2[IO]
  )(using t: Temporal[IO]): HttpRoutes[IO] =
    HttpRoutes.of[IO] { case GET -> Root / "ws" / handle =>
      val receive: Pipe[IO, WebSocketFrame, Unit] = { in =>
        in.evalMap {
          case Text(txt, _) =>
            jawn.decode[Command](txt) match {
              case Right(Talk(message)) =>
                service.talk(handle, message)
              case Right(RequestStick()) =>
                service.requestStick(handle)
              case Left(e) =>
                IO.println(s"Unknown command from ${handle} ${txt}. Ignoring...")
            }
          case Binary(data, last) =>
            for {
              _ <- IO.println(s"${handle} sent us binary. Is last? ${last}")
              wavData <- FileHandler.convertVector(data)
              transcript <- speechService.transcribe(wavData)
              _ <- transcript match {
                case None    => IO.println(s"Could not transcribe what ${handle} said.")
                case Some(t) => service.talk(handle, t)
              }
            } yield ()
          case _ => IO.println(s"${handle} sent us unknown WebSocketFrame type. Ignoring...")
        }
      }
      ws.build(service.eventsTopic.subscribeUnbounded.map(e => WebSocketFrame.Text(e.asJson.noSpaces)), receive)
    }

}
