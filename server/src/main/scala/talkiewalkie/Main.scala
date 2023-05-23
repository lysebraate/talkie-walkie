package talkiewalkie

import cats.effect.std.{AtomicCell, Queue}
import cats.effect.syntax.all.*
import cats.effect.*
import cats.syntax.all.*
import com.comcast.ip4s.{ipv4, port}
import fs2.concurrent.Topic
import fs2.{Pipe, Stream}
import io.circe.generic.auto.*
import io.circe.jawn
import io.circe.syntax.*
import org.http4s.Method.GET
import org.http4s.dsl.io.*
import org.http4s.ember.server.EmberServerBuilder
import org.http4s.server.Server
import org.http4s.server.websocket.WebSocketBuilder2
import org.http4s.websocket.WebSocketFrame
import org.http4s.websocket.WebSocketFrame.Text
import org.http4s.{HttpRoutes, Response}
import talkiewalkie.Command.*

import java.time.Instant
import java.time.temporal.ChronoUnit
import java.util.UUID
import scala.concurrent.duration.*

object Main extends IOApp {

  private def routes(
      service: Service,
      ws: WebSocketBuilder2[IO]
  )(using t: Temporal[IO]): HttpRoutes[IO] =
    HttpRoutes.of[IO] {
      case GET -> Root / "test" =>
        Ok(Talk("Hello").asInstanceOf[Command].asJson.noSpaces)

      case GET -> Root / "ws" / handle =>
        val receive: Pipe[IO, WebSocketFrame, Unit] = { in =>
          in.evalMap {
            case Text(txt, _) =>
              jawn.decode[Command](txt) match {
//                case Right(txt) => {
//              SlashCommands.toCommand(txt) match {
                case Right(Talk(message)) =>
                  service.talk(handle, message)
                case Right(RequestStick()) =>
                  service.requestStick(handle)
                case Left(e) =>
                  IO.println(s"Unknown command from ${handle} ${txt}. Ignoring...")
              }
//              }
            case _ => IO.println(s"${handle} sent us a non-text payload. Ignoring...")
          }
        }
        ws.build(service.eventsTopic.subscribeUnbounded.map(e => WebSocketFrame.Text(e.asJson.noSpaces)), receive)
    }

  private def serverResource(
      service: Service
  ): Resource[IO, Server] =
    EmberServerBuilder
      .default[IO]
      .withHost(ipv4"0.0.0.0")
      .withPort(port"8181")
      .withIdleTimeout(2.days)
      .withHttpWebSocketApp(ws =>
        routes(
          service,
          ws
        ).orNotFound
      )
      .build

  def run(args: List[String]): IO[ExitCode] = {
    for {
      eventsTopic <- Topic[IO, Event]
      talkingStick <- AtomicCell[IO].empty[Option[String]]
      service = Service(eventsTopic, talkingStick)
      server: Stream[IO, Server] = Stream.resource(serverResource(service) >> Resource.never)
      _ <- server.compile.drain
    } yield ExitCode.Success

//    val server: Stream[IO, Server] = Stream.resource(serverResource(service) >> Resource.never)

//    server.compile.drain.as(ExitCode.Success)
  }

}