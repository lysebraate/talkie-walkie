import { Component, createSignal } from "solid-js";
import { ActionButton } from "./ui/ActionButton";
import { LogoUI } from "./ui/LogoUI";

interface JoinProps {
  updateHandle: (handle: string) => void;
}

export const Join: Component<JoinProps> = ({ updateHandle }) => {
  const [handle, setHandle] = createSignal("");

  const enterLobby = () => {
    updateHandle(handle());
  };

  return (
    <div class="flex flex-col items-center mb-10">
      <LogoUI />

      <h2 class="font-bold font-logo text-md text-center mb-4">
        You need a microphone for this to work
      </h2>
      <div class="flex flex-col text-center text-lg gap-2">
        <b>Select a handle:</b>
        <input
          class="border border-2 border-amber-500 p-2 rounded-lg"
          type="text"
          id="handle"
          value={handle()}
          onChange={(e) => setHandle(e.currentTarget.value)}
        />
      </div>
      <ActionButton onClick={enterLobby} label="Enter" />
    </div>
  );
};
