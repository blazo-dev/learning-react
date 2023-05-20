import confetti from 'canvas-confetti'
import { useState } from 'react'
import './App.css'
import { GameBoard } from './components/GameBoard.jsx'
import { TurnDisplay } from './components/TurnDisplay.jsx'
import { WinnerModal } from './components/WinnerModal.jsx'
import { checkEndGame, checkWinner } from './utils/board.js'
import { TURNS } from './utils/constans.js'
import {
  clearGameStorage,
  saveBoardInStorage,
  saveTurnInStorage
} from './utils/storage'
function App () {
  const [turn, setTurn] = useState(() => {
    const savedTurn = window.localStorage.getItem('turn')
    return savedTurn || TURNS.X
  })
  const [board, setBoard] = useState(() => {
    const savedBoard = JSON.parse(window.localStorage.getItem('board'))
    return savedBoard || Array(9).fill(null)
  })
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setTurn(TURNS.X)
    setBoard(Array(9).fill(null))
    setWinner(null)
    clearGameStorage()
  }

  const updateBoard = (index) => {
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    saveBoardInStorage(JSON.stringify(newBoard))
    saveTurnInStorage(newTurn)

    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  return (
    <main className='board'>
      <button onClick={resetGame}>Restart</button>
      <h1>Tic tac toe</h1>
      <GameBoard board={board} updateBoard={updateBoard} />
      <TurnDisplay turn={turn} />
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App
