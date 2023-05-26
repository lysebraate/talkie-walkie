import {
  Accessor,
  Component,
  createEffect,
  createSignal,
  For,
  Setter,
  Show,
} from "solid-js";
import { LogoUI } from "./ui/LogoUI";
import createWebsocket from "@solid-primitives/websocket";
import { ActionButton } from "./ui/ActionButton";
import { events } from "./Events";
import { Character, CharacterType } from "./ui/Character";
import { Message } from "./Message";

interface AppProps {
  handle: Accessor<string>;
  setHandle: Setter<string>;
}

const App: Component<AppProps> = ({ handle, setHandle }) => {
  const [lastMessage, setLastMessage] = createSignal<Message>();
  const [participants, setParticipants] = createSignal<Participant[]>([]);

  const [hasStick, setHasStick] = createSignal<boolean>(false);
  const [otherHasStick, setOtherHasStick] = createSignal<boolean>(false);
  const [processingAudio, setProcessingAudio] = createSignal<boolean>(false);

  const eventDispatch = (text: string) => {
    const parsed = events.safeParse(JSON.parse(text));
    if (parsed.success) {
      switch (parsed.data.type) {
        case "Talked": {
          const newMessage: Message = {
            handle: parsed.data.handle,
            message: parsed.data.message,
          };
          setLastMessage(newMessage);
          setProcessingAudio(false);
          break;
        }
        case "PickedUpStick": {
          if (parsed.data.handle === handle()) {
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
        case "Joined": {
          setParticipants([...participants(), parsed.data.handle]);
          break;
        }
        case "ExistingMembers": {
          setParticipants(parsed.data.handles);
          break;
        }
        case "Left": {
          setParticipants(
            participants().filter((p) => p.handle !== parsed.data.handle)
          );
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
    `wss://<ip>/ws/${handle()}`,
    (msg) => eventDispatch(msg.data),
    (msg) => {
      console.error(msg);
      setHandle("");
    },
    [],
    5,
    5000
  );

  connect();

  setInterval(() => {
    send(JSON.stringify({ type: "PhoneHome", handle: handle() }));
  }, 5000);

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
      setProcessingAudio(true);
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
          {lastMessage() !== undefined && (
            <div class="flex gap-4 bg-white p-4 rounded-xl">
              <h3 class="font-bold font-logo text-xl text-center mb-10">
                {lastMessage()!.message}
              </h3>
            </div>
          )}
          <div class="flex grid gap-12 grid-cols-6">
            <For each={participants()}>
              {(member) => {
                return (
                  <>
                    <Show when={lastMessage()?.handle === member.handle}>
                      <Character
                        handle={member.handle}
                        characterType={member.character as CharacterType}
                        lastSpoken={true}
                      />
                    </Show>
                    <Show when={lastMessage()?.handle !== member.handle}>
                      <Character
                        handle={member.handle}
                        characterType={member.character as CharacterType}
                        lastSpoken={false}
                      />
                    </Show>
                  </>
                );
              }}
            </For>
          </div>
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

        <Show when={hasStick() && !processingAudio()}>
          <h3 class="font-bold font-logo text-xl text-center mb-10">
            Recording...
          </h3>
          <ActionButton onClick={() => stopRecording()} label="Stop" />
        </Show>

        <Show when={hasStick() && processingAudio()}>
          <h3 class="font-bold font-logo text-xl text-center mb-10">
            Sending your message
          </h3>
        </Show>
      </div>
    </div>
  );
};

export default App;
