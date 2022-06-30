import { useContext } from "react";
import { Context } from "../context/context-provider";

export function Hex({ letter }) {
  const { addLetter, letterSelect } = useContext(Context);
  function handlesClick() {
    addLetter(letter);
  }
  return (
    <div
      onClick={handlesClick}
      className={
        letterSelect.toUpperCase() === letter ? "hex required-letter" : "hex"
      }
    >
      {letter}
    </div>
  );
}
