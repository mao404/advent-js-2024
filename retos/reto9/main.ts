type Board = string[];
type Movement = "U" | "D" | "R" | "L";
type Result = "none" | "crash" | "eat";

function moveTrain(board: Board, mov: Movement): Result {
  // Encuentra la posición inicial de la locomotora
  let headRow = -1,
    headCol = -1;
  for (let i = 0; i < board.length; i++) {
    const col = board[i].indexOf("@");
    if (col !== -1) {
      headRow = i;
      headCol = col;
      break;
    }
  }

  // Dirección del movimiento
  const directions: Record<Movement, [number, number]> = {
    U: [-1, 0],
    D: [1, 0],
    L: [0, -1],
    R: [0, 1],
  };

  const [dRow, dCol] = directions[mov];
  const newRow = headRow + dRow;
  const newCol = headCol + dCol;

  // Verifica si el tren se sale del tablero
  if (
    newRow < 0 ||
    newRow >= board.length ||
    newCol < 0 ||
    newCol >= board[0].length
  ) {
    return "crash";
  }

  const newCell = board[newRow][newCol];

  // Verifica si el tren choca consigo mismo
  if (newCell === "@" || newCell === "o") {
    return "crash";
  }

  // Verifica si el tren come una fruta mágica
  if (newCell === "*") {
    // Actualiza el tablero
    board[newRow] =
      board[newRow].slice(0, newCol) + "@" + board[newRow].slice(newCol + 1);
    board[headRow] =
      board[headRow].slice(0, headCol) +
      "o" +
      board[headRow].slice(headCol + 1);
    return "eat";
  }

  // Movimiento normal
  board[newRow] =
    board[newRow].slice(0, newCol) + "@" + board[newRow].slice(newCol + 1);
  board[headRow] =
    board[headRow].slice(0, headCol) + "o" + board[headRow].slice(headCol + 1);

  return "none";
}
