import {
  Component,
  createEffect,
  createSignal,
  For,
  Match,
  Show,
  Switch,
} from "solid-js";

import { LogoUI } from "./ui/LogoUI";
import createWebsocket from "@solid-primitives/websocket";
import { createStore } from "solid-js/store";
import { ActionButton } from "./ui/ActionButton";
import { z } from "zod";

export const talked = z.object({
  handle: z.string(),
  message: z.string(),
  type: z.literal("Talked"),
});

export const pickedUpStick = z.object({
  handle: z.string(),
  type: z.literal("PickedUpStick"),
});

export const stickAvailable = z.object({
  type: z.literal("StickAvailable"),
});

export const events = z.union([pickedUpStick, talked, stickAvailable]);

interface AppProps {
  handle: string;
}

const App: Component<AppProps> = ({ handle }) => {
  const [hasStick, setHasStick] = createSignal<boolean>(false);
  const [otherHasStick, setOtherHasStick] = createSignal<boolean>(false);
  const [messages, setMessages] = createSignal<
    { handle: string; message: string }[]
  >([]);

  const eventDispatch = (text: string) => {
    const parsed = events.safeParse(JSON.parse(text));
    if (parsed.success) {
      switch (parsed.data.type) {
        case "Talked": {
          console.log("Talked", parsed.data.handle, parsed.data.message);
          const newMessage = {
            handle: parsed.data.handle,
            message: parsed.data.message,
          };
          setMessages([...messages(), newMessage]);
          break;
        }
        case "PickedUpStick": {
          if (parsed.data.handle === handle) {
            setHasStick(true);
          } else {
            setOtherHasStick(true);
          }
          console.log("PickedUPStick", parsed.data.handle);
          break;
        }
        case "StickAvailable": {
          console.log("Stick available");
          setHasStick(false);
          setOtherHasStick(false);
          break;
        }
        default: {
          console.error("Unknown");
          break;
        }
      }
    } else {
      console.error(parsed.error);
    }
  };

  const [connect, disconnect, send, state] = createWebsocket(
    `ws://127.0.0.1:8181/ws/${handle}`,
    (msg) => eventDispatch(msg.data),
    (msg) => console.error(msg),
    [],
    5,
    5000
  );

  connect();

  console.log("State", state());

  const [message, setMessage] = createSignal<string>("");

  const sendMessage = () => {
    send(JSON.stringify({ type: "Talk", message: message() }));
    setMessage("");
  };

  const requestStick = () => {
    send(JSON.stringify({ type: "RequestStick" }));
  };

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

        <Show when={hasStick() && !otherHasStick()}>
          <b>Message:</b>
          <input
            class="border border-2 border-amber-500 p-2 rounded-lg"
            type="text"
            id="message"
            value={message()}
            onChange={(e) => setMessage(e.currentTarget.value)}
          />
          <ActionButton onClick={sendMessage} label="Enter" />
        </Show>
      </div>
    </div>
  );
};

export default App;
