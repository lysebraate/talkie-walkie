import { Component, Show } from "solid-js";
import { Bubble, NoBubble } from "./Character";

export const CharacterFour: Component<{
  handle: string;
  lastSpoken: boolean;
}> = ({ handle, lastSpoken }) => {
  return (
    <div class="flex flex-col">
      <div class="flex justify-center">
        <div class="grid grid-cols-11">
          <Show when={lastSpoken}>
            <Bubble />
          </Show>
          <Show when={!lastSpoken}>
            <NoBubble />
          </Show>

          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(255, 193, 7);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(255, 193, 7);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(255, 193, 7);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(255, 193, 7);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(255, 193, 7);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(255, 193, 7);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(255, 193, 7);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(255, 193, 7);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(255, 205, 210);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(255, 205, 210);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(255, 205, 210);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(255, 205, 210);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(255, 205, 210);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(255, 193, 7);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(255, 205, 210);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(255, 205, 210);"
          ></div>
          <div class="h-2 w-2" style="background-color: rgb(0, 0, 0);"></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(255, 205, 210);"
          ></div>
          <div class="h-2 w-2" style="background-color: rgb(0, 0, 0);"></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(255, 205, 210);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(255, 205, 210);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(255, 193, 7);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(255, 205, 210);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(255, 205, 210);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(255, 205, 210);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(255, 205, 210);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(255, 205, 210);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(255, 193, 7);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(255, 205, 210);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(255, 205, 210);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(255, 205, 210);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(255, 205, 210);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(255, 205, 210);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(255, 205, 210);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(0, 188, 212);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(0, 188, 212);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(255, 205, 210);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(255, 205, 210);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(255, 205, 210);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(0, 188, 212);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(0, 188, 212);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(255, 205, 210);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(255, 205, 210);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(0, 188, 212);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(0, 188, 212);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(0, 188, 212);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(0, 188, 212);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(0, 188, 212);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(0, 188, 212);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(0, 188, 212);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(255, 205, 210);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(0, 188, 212);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(0, 188, 212);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(0, 188, 212);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(0, 188, 212);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(0, 188, 212);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(121, 85, 72);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(121, 85, 72);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(121, 85, 72);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(121, 85, 72);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(121, 85, 72);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(255, 152, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(255, 152, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(255, 152, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(255, 152, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
          <div
            class="h-2 w-2"
            style="background-color: rgb(49, 49, 49, 0);"
          ></div>
        </div>
      </div>
      <div class={`mt-2 ml-2 ${lastSpoken ? "font-bold" : ""}`}>{handle}</div>
    </div>
  );
};
