import { Square } from './Square.jsx'

export function GameBoard ({ board, updateBoard }) {
  return (
    <section className='game'>
      {board.map((cell, index) => (
        <Square key={index} index={index} updateBoard={updateBoard}>
          {cell}
        </Square>
      ))}
    </section>
  )
}
