package talkiewalkie

import cats.effect.IO
import fs2.io.file
import fs2.io.file.Files
import ws.schild.jave.{Encoder, MultimediaObject}
import ws.schild.jave.encode.{AudioAttributes, EncodingAttributes}

import java.io.File
import java.nio.file.{Path, Paths}

object WebpToWav {

  def convert(source: fs2.io.file.Path): IO[fs2.io.file.Path] = for {
    target <- Files[IO].createTempFile
    _ <- IO.blocking {
      val audio = new AudioAttributes()
      audio.setBitRate(128000)
      audio.setChannels(1)
      audio.setSamplingRate(44100)

      val attrs = new EncodingAttributes()
      attrs.setOutputFormat("wav")
      attrs.setAudioAttributes(audio)

      val encoder = new Encoder()
      encoder.encode(new MultimediaObject(source.toNioPath.toFile), target.toNioPath.toFile, attrs);
    }
  } yield target

}
