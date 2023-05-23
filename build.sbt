val scala3Version = "3.2.2"
val http4sVersion = "0.23.18"
val circeVersion = "0.14.1"

lazy val root = project
  .in(file("."))
  .settings(
    name := "talkie-walkie",
    version := "0.1.0-SNAPSHOT",
    scalaVersion := scala3Version,
    libraryDependencies += "org.scalameta" %% "munit" % "0.7.29" % Test,
    libraryDependencies += "org.typelevel" %% "munit-cats-effect-3" % "1.0.7" % Test,
    libraryDependencies ++= Seq(
      "org.http4s" %% "http4s-ember-server" % http4sVersion,
      "org.http4s" %% "http4s-dsl" % http4sVersion
    ),
    libraryDependencies ++= Seq(
      "io.circe" %% "circe-core" % circeVersion,
      "io.circe" %% "circe-generic" % circeVersion
    ),
    libraryDependencies += "org.latestbit" %% "circe-tagged-adt-codec" % "0.10.1"
  )
