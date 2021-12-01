import dedent from "dedent";
import colors from "colors";
import input from "./input";

const getInput = () => input.split(",").map(Number);

const run = (input) => {
  let map = {};
  let prev = input[input.length - 1];
  for (let i = 0; i < input.length; i++) {
    map[input[i]] = i + 1;
  }
  for (let i = input.length; i < 30000000; i++) {
    let nextPrev = map[prev] ? i - map[prev] : 0;
    map[prev] = i;
    prev = nextPrev;
  }
  return prev;
};

const part1 = () => {
  const input = getInput();
  return run(input);
};

const part2 = () => {
  const input = getInput();
  // run(input)
};

export default {
  part1,
  part2,
};
