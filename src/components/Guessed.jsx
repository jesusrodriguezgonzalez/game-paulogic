import { useContext } from "react";
import { Context } from "../context/context-provider";

export function Guessed() {
  const { guessedWords } = useContext(Context);
  return <p id="word-count">You have guessed {guessedWords.length} words:</p>;
}
