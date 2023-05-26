import { Component } from "solid-js";
import { CharacterOne } from "./CharacterOne";
import { CharacterTwo } from "./CharacterTwo";
import { CharacterThree } from "./CharacterThree";
import { CharacterFour } from "./CharacterFour";
import { CharacterFive } from "./CharacterFive";

export type CharacterType = 1 | 2 | 3 | 4 | 5;

export const Character: Component<{
  handle: string;
  characterType: CharacterType;
  lastSpoken: boolean;
}> = ({ handle, characterType, lastSpoken }) => {
  switch (characterType) {
    case 1:
      return <CharacterOne handle={handle} lastSpoken={lastSpoken} />;
    case 2:
      return <CharacterTwo handle={handle} lastSpoken={lastSpoken} />;
    case 3:
      return <CharacterThree handle={handle} lastSpoken={lastSpoken} />;
    case 4:
      return <CharacterFour handle={handle} lastSpoken={lastSpoken} />;
    case 5:
      return <CharacterFive handle={handle} lastSpoken={lastSpoken} />;
  }
};

export const Bubble = () => {
  return (
    <>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(255, 255, 255);"></div>
      <div class="h-2 w-2" style="background-color: rgb(255, 255, 255);"></div>
      <div class="h-2 w-2" style="background-color: rgb(255, 255, 255);"></div>
      <div class="h-2 w-2" style="background-color: rgb(255, 255, 255);"></div>
      <div class="h-2 w-2" style="background-color: rgb(255, 255, 255);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(255, 255, 255);"></div>
      <div class="h-2 w-2" style="background-color: rgb(255, 255, 255);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(255, 255, 255);"></div>
      <div class="h-2 w-2" style="background-color: rgb(255, 255, 255);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(255, 255, 255);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
    </>
  );
};

export const NoBubble = () => {
  return (
    <>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
      <div class="h-2 w-2" style="background-color: rgb(49, 49, 49, 0);"></div>
    </>
  );
};
