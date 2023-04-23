export function Square({ children, isSelected, index, updateBoard }) {
  const squareClasses = isSelected ? "square is-selected" : "square";

  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div className={squareClasses} onClick={handleClick}>
      {children}
    </div>
  );
}
