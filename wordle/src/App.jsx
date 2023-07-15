import { useState } from "react";
import "./App.css";
import Keyboard from "./components/Keyboard";
import Board from "./components/Board";
import { boardDefault } from "./words";
import { createContext } from "react";

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <div className="game">
        <AppContext.Provider value={{ board, setBoard }}>
          <Board />
          <Keyboard />
        </AppContext.Provider>
      </div>
    </div>
  );
}

export default App;
