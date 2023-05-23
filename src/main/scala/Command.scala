import org.latestbit.circe.adt.codec.JsonTaggedAdt

abstract sealed trait Command derives JsonTaggedAdt.Decoder, JsonTaggedAdt.Encoder

case class Talk(message: String) extends Command
