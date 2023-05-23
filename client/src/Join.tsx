import { Component, createSignal } from "solid-js";
import { ActionButton } from "./ui/ActionButton";

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
      <h3 class="font-bold text-xl mb-4">Join</h3>
      <div class="flex flex-col text-center gap-2">
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
