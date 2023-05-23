import org.latestbit.circe.adt.codec.JsonTaggedAdt

enum Event derives JsonTaggedAdt.Encoder:
  case Talked(handle: String, message: String)
