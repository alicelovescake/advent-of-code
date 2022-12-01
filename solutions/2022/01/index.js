import { example, data } from "./input";

export const inputParser = (input) =>
  input.split("\n\n").map((set) => set.split("\n"));

const parsedData = inputParser(data);

const getTotal = (input) => {
  return input.map((set) =>
    set.reduce((acc, calories) => parseInt(calories) + acc, 0)
  );
};

export const part1 = (input = parsedData) => {
  return Math.max(...getTotal(input));
};

export const part2 = (input = parsedData) => {
  const total = getTotal(input);
  total.sort((a, b) => b - a);

  return total[0] + total[1] + total[2];
};

export default {
  part1,
  part2,
};
