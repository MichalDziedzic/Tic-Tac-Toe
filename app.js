const PLAYER_ONE = "fa-circle-o";
const PLAYER_TWO = "fa-times";
let round = 1;
const board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
const combinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const boxes = [...document.querySelectorAll(".box")];

boxes.forEach((box) => box.addEventListener("click", pick));

function pick(e) {
  const { row, column } = e.target.dataset;
  console.log({ row, column });
  const turn = round % 2 === 0 ? PLAYER_TWO : PLAYER_ONE;
  if (board[row][column] !== "") return;
  e.target.classList.add(turn);
  board[row][column] = turn;
  round++;

  check();
}

function check() {}
