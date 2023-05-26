package talkiewalkie

import org.latestbit.circe.adt.codec.JsonTaggedAdt

abstract sealed trait Command derives JsonTaggedAdt.Decoder, JsonTaggedAdt.Encoder

case class Talk(message: String) extends Command
case class RequestStick() extends Command

case class PhoneHome(handle: String) extends Command
