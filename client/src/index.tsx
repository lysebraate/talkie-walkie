/* @refresh reload */
import { Match, Switch, render } from "solid-js/web";

import "./index.css";
import App from "./App";
import { createSignal } from "solid-js";
import { Join } from "./Join";

render(() => {
  const [handle, setHandle] = createSignal<string>("");

  const handleIsSet = () => handle() !== "";

  return (
    <div>
      <Switch>
        <Match when={!handleIsSet()}>
          <Join updateHandle={setHandle} />
        </Match>
        <Match when={handleIsSet()}>
          <App handle={handle()} />
        </Match>
      </Switch>
    </div>
  );
}, document.getElementById("root") as HTMLElement);
