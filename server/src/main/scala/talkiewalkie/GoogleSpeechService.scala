package talkiewalkie

import cats.effect.IO
import cats.syntax.all.*
import com.google.cloud.speech.v1.RecognitionConfig.AudioEncoding
import com.google.cloud.speech.v1.{RecognitionAudio, RecognitionConfig, SpeechClient}
import com.google.protobuf.ByteString

import java.nio.file.{Files, Path, Paths}
import scala.jdk.CollectionConverters.*

object GoogleSpeechService {

  def connect: IO[GoogleSpeechService] = {
    for {
      speechClient <- IO.blocking(SpeechClient.create())
      config <- buildRecognitionConfig
    } yield GoogleSpeechService(speechClient, config)
  }

  private def buildRecognitionConfig: IO[RecognitionConfig] =
    IO.blocking {
      RecognitionConfig
        .newBuilder()
        .setEncoding(AudioEncoding.LINEAR16)
        .setSampleRateHertz(44100)
        .setModel("latest_long")
        //        .setLanguageCode("en-US")
        .setLanguageCode("no-NO")
        //        .setLanguageCode("da-DK")
        .setProfanityFilter(true)
        .build
    }

}

case class GoogleSpeechService private (private val speechClient: SpeechClient, private val config: RecognitionConfig) {
  def transcribe(data: Array[Byte]): IO[Option[String]] = {
    for {
      audio <- recognitionAudio(data)
      results <- IO.blocking(speechClient.recognize(config, audio)).map(_.getResultsList.asScala.toList)
      transcript = results.map(s => s.getAlternativesList.asScala.toList.map(e => e.getTranscript).mkString(". "))
    } yield if (transcript.isEmpty) None else Some(transcript.mkString(". "))
  }

  private def recognitionAudio(data: Array[Byte]): IO[RecognitionAudio] =
    IO.blocking {
      val audioBytes = ByteString.copyFrom(data)
      RecognitionAudio.newBuilder.setContent(audioBytes).build
    }

}
