import cats.effect.IO
import fs2.concurrent.Topic
import Command.*
import fs2.Stream

case class Service(eventsTopic: Topic[IO, Event]) {

  def talk(handle: String, message: String): IO[Unit] =
    for {
      _ <- IO.println(s"${handle} says ${message}")
      _ <- eventsTopic.publish1(Event.Talked(handle, message))
    } yield ()

}
