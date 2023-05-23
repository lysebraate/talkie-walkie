package talkiewalkie

import scala.util.matching.Regex

object SlashCommands {

  val talkCommand: Regex = raw"\/talk (.*)".r
  val requestStickCommand: Regex = raw"\/stick".r

  def toCommand(str: String): Either[Throwable, Command] = {
    str match {
      case talkCommand(message)  => Right(Talk(message))
      case requestStickCommand() => Right(RequestStick())
      case _                     => Left(new RuntimeException("Invalid command"))
    }
  }

}
