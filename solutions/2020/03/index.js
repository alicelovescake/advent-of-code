import dedent from "dedent";
import colors from "colors";
import input from "./input";

const getInput = () => input.split("\n");

const run = (input) => {
  let count = 3;
  let trees = 0;
  for (let i = 1; i < input.length; i++) {
    if (input[i][count] === "#") {
      trees++;
    }
    count = (count + 3) % input[i].length;
  }
  return trees;
};
const run2 = (input, increment, yincrement) => {
  let count = increment;
  let trees = 0;
  for (let i = yincrement; i < input.length; i += yincrement) {
    if (input[i][count] === "#") {
      trees++;
    }
    count = (count + increment) % input[i].length;
  }
  return trees;
};

const part1 = () => {
  const input = getInput();
  return run(input);
};

const part2 = () => {
  const input = getInput();
  return (
    run2(input, 1, 1) *
    run2(input, 3, 1) *
    run2(input, 5, 1) *
    run2(input, 7, 1) *
    run2(input, 1, 2)
  );
};

export default {
  part1,
  part2,
};
