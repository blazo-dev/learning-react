import "./App.css";
import { checkEndGame, checkWinner } from "./utils/board.js";
import { GameBoard } from "./components/GameBoard.jsx";
import { TurnDisplay } from "./components/TurnDisplay.jsx";
import { TURNS } from "./utils/constans.js";
import { useState } from "react";
import { WinnerModal } from "./components/WinnerModal.jsx";
import confetti from "canvas-confetti";
function App() {
  const [turn, setTurn] = useState(() => {
    const savedTurn = localStorage.getItem("turn");
    return savedTurn || TURNS.X;
  });
  const [board, setBoard] = useState(() => {
    const savedBoard = JSON.parse(localStorage.getItem("board"));
    return savedBoard || Array(9).fill(null);
  });
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setTurn(TURNS.X);
    setBoard(Array(9).fill(null));
    setWinner(null);
    localStorage.removeItem("board");
    localStorage.removeItem("turn");
  };

  const updateBoard = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    localStorage.setItem("board", JSON.stringify(newBoard));
    localStorage.setItem("turn", turn);

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  return (
    <main className="board">
      <button onClick={resetGame}>Restart</button>
      <h1>Tic tac toe</h1>
      <GameBoard board={board} updateBoard={updateBoard} />
      <TurnDisplay turn={turn} />
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
}

export default App;
