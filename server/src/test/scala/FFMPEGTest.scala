import cats.effect.{IO, IOApp}
import ws.schild.jave.encode.{AudioAttributes, EncodingAttributes}
import ws.schild.jave.process.ffmpeg.DefaultFFMPEGLocator
import ws.schild.jave.{Encoder, MultimediaObject}

import java.io.File

object FFMPEGTest extends IOApp.Simple {
  override def run: IO[Unit] = IO {
    val locator = new DefaultFFMPEGLocator()
    val exePath = locator.getExecutablePath
    System.out.println("ffmpeg executable found in <" + exePath + ">")
  }
}
