export const saveTurnInStorage = (turn) => {
  localStorage.setItem("turn", turn);
};

export const saveBoardInStorage = (board) => {
  localStorage.setItem("board", board);
};

export const clearGameStorage = () => {
  localStorage.removeItem("board");
  localStorage.removeItem("turn");
};
