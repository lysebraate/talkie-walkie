import { Component, createEffect, createSignal, For, Show } from "solid-js";
import { LogoUI } from "./ui/LogoUI";
import createWebsocket from "@solid-primitives/websocket";
import { ActionButton } from "./ui/ActionButton";
import { events } from "./Events";

interface AppProps {
  handle: string;
}

const App: Component<AppProps> = ({ handle }) => {
  const [hasStick, setHasStick] = createSignal<boolean>(false);
  const [otherHasStick, setOtherHasStick] = createSignal<boolean>(false);
  const [processing, setProcessing] = createSignal<boolean>(false);

  const [messages, setMessages] = createSignal<
    { handle: string; message: string }[]
  >([]);

  const eventDispatch = (text: string) => {
    const parsed = events.safeParse(JSON.parse(text));
    if (parsed.success) {
      switch (parsed.data.type) {
        case "Talked": {
          const newMessage = {
            handle: parsed.data.handle,
            message: parsed.data.message,
          };
          setMessages([...messages(), newMessage]);
          setProcessing(false);
          break;
        }
        case "PickedUpStick": {
          if (parsed.data.handle === handle) {
            setHasStick(true);
          } else {
            setOtherHasStick(true);
          }
          break;
        }
        case "StickAvailable": {
          setHasStick(false);
          setOtherHasStick(false);
          break;
        }
        default: {
          console.error("Event not mapped. Ignoring...");
          break;
        }
      }
    } else {
      console.error(parsed.error);
    }
  };

  const [connect, disconnect, send, state] = createWebsocket(
    `wss://<ip>:3456/ws/${handle}`,
    (msg) => eventDispatch(msg.data),
    (msg) => console.error(msg),
    [],
    5,
    5000
  );

  connect();

  const requestStick = () => {
    send(JSON.stringify({ type: "RequestStick" }));
  };

  var mediaRecorder: MediaRecorder = null as unknown as MediaRecorder;
  let recordedChunks: BlobPart[] = [];

  createEffect(() => {
    if (hasStick()) {
      if (mediaRecorder !== null) {
        mediaRecorder.start();
      }
    }
  });

  const stopRecording = () => {
    mediaRecorder.stop();
  };

  const handleSuccess = function (stream: any) {
    const options = { mimeType: "audio/webm" };

    mediaRecorder = new MediaRecorder(stream, options);

    mediaRecorder.addEventListener("dataavailable", function (e) {
      if (e.data.size > 0) recordedChunks.push(e.data);
    });

    mediaRecorder.addEventListener("stop", function () {
      const blob = new Blob(recordedChunks);
      send(blob); //wrong type from Solidjs websocket lib, we can send bytes
      setProcessing(true);
      recordedChunks = [];
    });
    console.log("Done");
  };

  navigator.mediaDevices
    .getUserMedia({ audio: true, video: false })
    .then(handleSuccess);

  return (
    <div class="flex flex-col justify-center items-center mt-5">
      <LogoUI />

      <div class="flex flex-col gap-4">
        <div class="flex flex-col">
          <For each={messages()}>
            {(m) => (
              <div class="flex gap-4">
                <div class="font-bold">{m.handle}:</div>
                <div>{m.message}</div>
              </div>
            )}
          </For>
        </div>

        <Show when={otherHasStick()}>
          <h2 class="font-bold font-logo text-2xl text-center">
            Someone picked up the stick.
          </h2>
          <h3 class="font-bold font-logo text-xl text-center mb-10">
            You will have to wait your turn.
          </h3>
        </Show>

        <Show when={!hasStick() && !otherHasStick()}>
          <ActionButton onClick={requestStick} label="Request Stick" />
        </Show>

        <Show when={hasStick() && processing()}>Sending your message</Show>

        <Show when={hasStick() && !processing()}>
          <h3 class="font-bold font-logo text-xl text-center mb-10">
            Recording...
          </h3>
          <ActionButton onClick={() => stopRecording()} label="Stop" />
        </Show>
      </div>
    </div>
  );
};

export default App;
