import { useState } from "react";
import "./App.css";
import Keyboard from "./components/Keyboard";
import Board from "./components/Board";
import { boardDefault } from "./words";
import { createContext } from "react";

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });

  const correctWord = "RIGHT";

  const onSelectLetter = (keyVal) => {
    if (currAttempt.letterPos > 4) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
    setBoard(newBoard);
    setCurrAttempt({
      ...currAttempt,
      letterPos: (currAttempt.letterPos += 1),
    });
  };

  const onEnter = () => {
    if (currAttempt.letterPos !== 5) return;
    setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });

    const newBoard = [...board];
    newBoard[0][currAttempt + 1];
    setBoard(newBoard);
  };

  const onDelete = () => {
    if (currAttempt.lettPos === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 });
  };
  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <div className="game">
        <AppContext.Provider
          value={{
            board,
            setBoard,
            currAttempt,
            setCurrAttempt,
            onDelete,
            onEnter,
            onSelectLetter,
            correctWord,
          }}
        >
          <Board />
          <Keyboard />
        </AppContext.Provider>
      </div>
    </div>
  );
}

export default App;
