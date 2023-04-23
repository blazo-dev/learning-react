import { Square } from "./Square.jsx";

export const WinnerModal = ({ winner, resetGame }) => {
  if (winner === null) return null;

  const winnerText =
    winner === false ? (
      <span>It's a draw!</span>
    ) : (
      <span>There is a winner!</span>
    );

  return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2>
        {winner && <Square isSelected>{winner}</Square>}
        <footer>
          <button onClick={resetGame}>Play again</button>
        </footer>
      </div>
    </section>
  );
};
