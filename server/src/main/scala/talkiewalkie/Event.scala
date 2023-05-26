package talkiewalkie

import org.latestbit.circe.adt.codec.JsonTaggedAdt

enum Event derives JsonTaggedAdt.Encoder:
  case Talked(handle: String, message: String)
  case PickedUpStick(handle: String)
  case StickAvailable()
  case Joined(handle: Participant)
  case Left(handle: String)
  case ExistingMembers(handles: List[Participant])
