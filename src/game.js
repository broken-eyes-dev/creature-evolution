const board = [
  [1, 1, 0],
  [2, 0, 0],
  [0, 0, 0],
];

function hasEmptyCell(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 0) {
        return true;
      }
    }
  }
  return false;
}

function canMerge(board, row1, col1, row2, col2) {
  const creature1 = board[row1][col1];
  const creature2 = board[row2][col2];

  if (row1 === row2 && col1 === col2) {
    return false;
  }
  if (creature1 === creature2 && creature1 !== 0 && creature2 !== 0) {
    return true;
  }
  return false;
}

function mergeCreatures(board, row1, col1, row2, col2) {
  if (!canMerge(board, row1, col1, row2, col2)) {
    return false;
  }
  board[row1][col1] = 0;
  board[row2][col2]++;
  return true;
}

console.log("First merge:", mergeCreatures(board, 0, 0, 0, 1));

console.log("Second merge:", mergeCreatures(board, 0, 1, 0, 0));

console.log("Final board:", board);
