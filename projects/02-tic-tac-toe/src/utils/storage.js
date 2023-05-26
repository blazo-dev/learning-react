export const saveTurnInStorage = (turn) => {
  window.localStorage.setItem('turn', turn)
}

export const saveBoardInStorage = (board) => {
  window.localStorage.setItem('board', board)
}

export const clearGameStorage = () => {
  window.localStorage.removeItem('board')
  window.localStorage.removeItem('turn')
}
