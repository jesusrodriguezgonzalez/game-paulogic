import { useContext, useState } from "react";
import { Context } from "../context/context-provider";

export function Input() {
  const { textInput } = useContext(Context);
  function handlesChange(ev) {
    console.log(ev.target.value);
  }

  return (
    <p
      onChange={handlesChange}
      id="text-input"
      class="text-input"
      role="textbox"
      contentEditable={true}
    >
      {textInput}
    </p>
  );
}
