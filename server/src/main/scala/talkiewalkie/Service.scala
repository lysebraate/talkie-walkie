package talkiewalkie

import cats.effect.{IO, Ref}
import cats.effect.std.AtomicCell
import fs2.Stream
import fs2.concurrent.Topic
import talkiewalkie.Command.*
import talkiewalkie.Event.PickedUpStick

import java.time.Instant

object Service {
  def create(eventsTopic: Topic[IO, Event], handles: Ref[IO, List[(Participant, Instant)]]): IO[Service] =
    for {
      talkingStick <- AtomicCell[IO].empty[Option[String]]
    } yield Service(eventsTopic, talkingStick, handles)
}

case class Service(
    eventsTopic: Topic[IO, Event],
    talkingStick: AtomicCell[IO, Option[String]],
    participants: Ref[IO, List[(Participant, Instant)]]
) {

  def join(handle: String): IO[Participant] = for {
    now <- IO.delay(Instant.now)
    result <- participants.updateAndGet(handles => handles :+ (Participant(handle, handles.size + 1), now))
    participant = result.last
    _ <- eventsTopic.publish1(Event.Joined(participant._1))
  } yield participant._1

  def phonedHome(handle: String): IO[Unit] = for {
    now <- IO.delay(Instant.now)
    _ <- participants.update(participantList =>
      participantList.map {
        case (p, _) if p.handle == handle => (p, now)
        case rest                         => rest
      }
    )
  } yield ()
  def members(): IO[List[Participant]] = participants.get.map(p => p.map(_._1))

  def talk(handle: String, message: String): IO[Unit] =
    talkingStick
      .evalUpdateAndGet {
        case Some(holder) if holder == handle =>
          for {
            _ <- IO.println(s"${handle} says ${message}")
            _ <- eventsTopic.publish1(Event.Talked(handle, message))
            _ <- IO.println(s"${handle} has spoken, and the stick is up for grabs...")
            _ <- eventsTopic.publish1(Event.StickAvailable())
          } yield None
        case Some(other) =>
          IO.println(s"${other} is holding the stick. ${handle} can talk and talk, but no one will listen...")
            .map(_ => Some(other))
        case None =>
          IO.println(s"No one has the stick, but ${handle} needs to pick it up before talking...").map(_ => None)
      }
      .as(())

  def requestStick(handle: String): IO[Unit] =
    for {
      _ <- IO.println(s"${handle} requested the stick...")
      result <- talkingStick.evalUpdateAndGet {
        case None =>
          IO.pure(Option(handle)).flatMap(holder => eventsTopic.publish1(Event.PickedUpStick(handle)).as(holder))
        case Some(holder) =>
          IO.println(s"${holder} already has the stick. Ignoring ${handle}'s request...'").map(_ => Some(holder))
      }
      _ <- IO.println(s"Holder of the stick is now ${result}")
    } yield ()
}
