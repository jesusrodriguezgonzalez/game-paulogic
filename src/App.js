import "./App.css";
import { Hex } from "./components/Hex";
import { Buttons } from "./components/Buttons";
import { Header } from "./components/Header";
import { Input } from "./components/InputText";
import { Guessed } from "./components/Guessed";
import { useContext } from "react";
import { Context } from "./context/context-provider";

function App() {
  const { selectLetter, letterSelect } = useContext(Context);
  if (letterSelect === "") {
    selectLetter();
  }

  return (
    <>
      <div class="container">
        <Header></Header>
        <Input></Input>
        <div className="App">
          <div class="center">
            <div class="row">
              <Hex letter={"J"}></Hex>
              <Hex letter={"C"}></Hex>
            </div>
            <div class="row">
              <Hex letter={"O"}></Hex>
              <Hex letter={"D"}></Hex>
              <Hex letter={"E"}></Hex>
            </div>
            <div class="row">
              <Hex letter={"R"}></Hex>
              <Hex letter={"S"}></Hex>
            </div>
          </div>
          <Buttons></Buttons>
          <Guessed></Guessed>
        </div>
      </div>
    </>
  );
}

export default App;
