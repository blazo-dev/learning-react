import { TURNS } from "../utils/constans.js";
import { Square } from "./Square.jsx";

export function TurnDisplay({ turn }) {
  return (
    <section className="turn">
      <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
      <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
    </section>
  );
}
