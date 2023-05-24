package talkiewalkie

import cats.effect.IO
import fs2.Chunk
import fs2.io.file
import fs2.io.file.Files
import ws.schild.jave.encode.{AudioAttributes, EncodingAttributes}
import ws.schild.jave.{Encoder, MultimediaObject}
import fs2.Stream
import scodec.bits.ByteVector

import java.io.File
import java.nio.file.{Path, Paths}

object FileHandler {

  def convertVector(data: ByteVector): IO[Array[Byte]] = for {
    wavTempFile <- convert(data)
    vector <- Files[IO].readAll(wavTempFile).compile.toVector
  } yield vector.toArray

  def convert(data: ByteVector): IO[fs2.io.file.Path] = for {
    webpTempFile <- Files[IO].createTempFile
    byteSource = Stream.chunk(Chunk.byteVector(data))
    _ <- byteSource.through(Files[IO].writeAll(webpTempFile)).compile.drain
    wavTempFile <- WebpToWav.convert(webpTempFile)
    _ <- IO.println(webpTempFile.absolute.toString)
    _ <- IO.println(wavTempFile.absolute.toString)
  } yield wavTempFile

}
