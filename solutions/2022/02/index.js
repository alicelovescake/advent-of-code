import { example, data } from "./input";

export const inputParser = (input) =>
  input.split("\n").map((row) => row.split(" "));

const parsedData = inputParser(data);
const MOVES = {
  X: { name: "Rock", value: 1 },
  A: { name: "Rock", value: 1 },
  Y: { name: "Paper", value: 2 },
  B: { name: "Paper", value: 2 },
  Z: { name: "Scissors", value: 3 },
  C: { name: "Scissors", value: 3 },
};
// winning values paper - rock = 1 or s - p = 1 or 1 - s = -2
// lose = 0, win = 6, lose = 3
const getWinningValue = (moveA, moveB) => {
  const moveValue = MOVES[moveB].value;
  let winningValue = moveValue - MOVES[moveA].value;
  switch (winningValue) {
    case 1:
    case -2:
      winningValue = 6 + moveValue;
      break;
    case 0:
      winningValue = 3 + moveValue;
      break;
    default:
      winningValue = 0 + moveValue;
      break;
  }
  return winningValue;
};

const getScore = (moveA, result) => {
  const resultValue = MOVES[moveB].value;
};

export const part1 = (input = parsedData) => {
  return input.reduce(
    (acc, [moveA, moveB]) => acc + getWinningValue(moveA, moveB),
    0
  );
};

export const part2 = (input = parsedData) => {
  return;
};

export default {
  part1,
  part2,
};
