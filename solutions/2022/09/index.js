import { example, data } from "./input";

export const inputParser = (input) =>
  input.split("\n").map((ele) => ele.split(" "));

const parsedData = inputParser(data);

const updateHead = (row, col, move) => {
  switch (move) {
    case "R":
      return [row + 1, col];
    case "U":
      return [row, col + 1];
    case "L":
      return [row - 1, col];
    case "D":
      return [row, col - 1];
  }
};

const updateMove = (units, head, tail, positions, move) => {
  let [row, col] = head;
  let [rowT, colT] = tail;

  for (let i = 0; i < parseInt(units); i++) {
    const prev = [row, col];
    [row, col] = updateHead(row, col, move);
    if (isTouching([row, col], [rowT, colT])) {
      continue;
    }
    rowT = prev[0];
    colT = prev[1];

    positions.add(`${rowT},${colT}`);
  }
  return [
    [row, col],
    [rowT, colT],
  ];
};
//move head, if tail is not touching head, move to previous pos
// if it is touching head, don't do anything

const isTouching = (head, tail) => {
  const [row, col] = head;
  const [rowT, colT] = tail;

  return Math.abs(col - colT) <= 1 && Math.abs(row - rowT) <= 1;
};

export const part1 = (input = parsedData) => {
  const positions = new Set(["0,0"]);
  let head = [0, 0];
  let tail = [0, 0];
  for (const [move, units] of input) {
    [head, tail] = updateMove(units, head, tail, positions, move);
  }
  console.log(positions, head, tail);
  return positions.size;
};

export const part2 = (input = parsedData) => {
  return;
};

export default {
  part1,
  part2,
};
