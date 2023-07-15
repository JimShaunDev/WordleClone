import React, { useContext } from "react";
import { AppContext } from "../App";

function Key({ keyVal, bigKey }) {
  const { board, setBoard, currAttempt, setCurrAttempt } =
    useContext(AppContext);

  const selectLetter = () => {
    if (keyVal === "Enter") {
      if (currAttempt.letterPos !== 5) return;
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });

      const newBoard = [...board];
      newBoard[0][currAttempt + 1];
      setBoard(newBoard);
    } else if (keyVal === "Del") {
      if (currAttempt.lettPos === 0) return;
      const newBoard = [...board];
      newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
      setBoard(newBoard);
      setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 });
    } else {
      if (currAttempt.letterPos > 4) return;
      const newBoard = [...board];
      newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
      setBoard(newBoard);
      setCurrAttempt({
        ...currAttempt,
        letterPos: (currAttempt.letterPos += 1),
      });
    }
  };
  return (
    <div className="key" id={bigKey && "big"} onClick={selectLetter}>
      {keyVal}
    </div>
  );
}

export default Key;
