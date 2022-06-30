import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const Context = createContext({
  textInput: "",
  guessedWords: [],
  addLetter: () => {},
  clear: () => {},
  sendWord: () => {},
  selectLetter: () => {},
  letterSelect: "",
});

export function ContextProvider({ children }) {
  const [textInput, setTextInput] = useState("");
  const [guessedWords, setGuessedWords] = useState([]);
  const [letterSelect, setLetterSelect] = useState("");

  const words = [
    "doc",
    "cedo",
    "code",
    "codo",
    "déco",
    "doce",
    "cedro",
    "cerdo",
    "credo",
    "decor",
    "codero",
    "codeso",
    "deceso",
    "decoro",
    "deseco",
    "escodo",
    "recodo",
    "record",
    "récord",
    "cerdoso",
    "cocedor",
    "codorro",
    "cordero",
    "cosedor",
    "creedor",
    "cocedero",
    "corredor",
    "creedero",
    "decoroso",
    "descocer",
    "descoser",
    "corredero",
    "corroedor",
    "crecedero",
    "descorreo",
    "descorrer",
    "escorredor",
    "socorredor",
    "escorredero",
  ];

  const checkWord = (word, wordList, letterSelect, guessedWords) => {
    if (guessedWords.includes(word)) {
      Swal.fire(
        "You already used this word!!",
        "You clicked the button!",
        "warning"
      );

      return;
    }
    if (word.length < 3) {
      Swal.fire(
        "Minimum word length is 3 letters",
        "You clicked the button!",
        "warning"
      );
      return;
    }
    if (!word.includes(letterSelect)) {
      Swal.fire(
        `You didn't use the required letter: ${letterSelect}`,
        "You clicked the button!",
        "error"
      );
      return;
    }
    if (!wordList.includes(word)) {
      Swal.fire("Wrong", "You clicked the button!", "error");
      return;
    }

    const newGuessedWords = [...guessedWords, word];
    setGuessedWords(newGuessedWords);

    Swal.fire("Correct!", "You clicked the button!", "success");
    return;
  };

  const addLetter = (letter) => {
    const concat = textInput + letter;
    setTextInput(concat);
  };

  const clear = () => {
    const str = textInput.slice(0, -1);
    setTextInput(str);
  };

  const sendWord = () => {
    const newWord = textInput.toLowerCase();
    checkWord(newWord, words, letterSelect, guessedWords);
    setTextInput("");
  };

  const selectLetter = async () => {
    const inputOptions = new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          j: "J",
          c: "C",
          o: "O",
          d: "D",
          e: "E",
          r: "R",
          s: "S",
        });
      }, 1000);
    });

    const { value: letter } = await Swal.fire({
      title: "Select a letter to start",
      input: "radio",
      inputOptions: inputOptions,
      inputValidator: (value) => {
        if (!value) {
          return "You need to choose something!";
        }
      },
    });

    if (letter) {
      Swal.fire({ html: `You selected: ${letter.toUpperCase()}` });
      setLetterSelect(letter);
    }
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const elementContext = {
    textInput,
    addLetter,
    clear,
    sendWord,
    guessedWords,
    selectLetter,
    letterSelect,
  };

  return <Context.Provider value={elementContext}>{children}</Context.Provider>;
}
