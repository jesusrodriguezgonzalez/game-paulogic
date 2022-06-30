import { useContext } from "react";
import { Context } from "../context/context-provider";

export function Buttons() {
  const { clear, sendWord } = useContext(Context);
  function ClearFunction() {
    clear();
  }
  function sendFunction() {
    sendWord();
  }
  return (
    <div class="buttons">
      <button onClick={ClearFunction} id="clear-button">
        Clear
      </button>
      <button onClick={sendFunction} id="send-button">
        Send
      </button>
    </div>
  );
}
