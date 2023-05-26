package talkiewalkie

import io.circe.Codec

case class Participant(handle: String, character: Int) derives Codec.AsObject
