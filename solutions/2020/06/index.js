import dedent from "dedent";
import colors from "colors";
import input from "./input";

const getInput = () => input.split("\n\n");

const run = (input) => {
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    count += new Set(input[i].replace(new RegExp("\n", "g"), "")).size;
  }
  return count;
};
const run2 = (input) => {
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    let group = input[i].split("\n").map((a) => new Set(a));
    let intersect = group.reduce(
      (a, b) => new Set([...a].filter((i) => b.has(i)))
    );
    count += intersect.size;
  }
  return count;
};

const part1 = () => {
  const input = getInput();
  return run(input);
};

const part2 = () => {
  const input = getInput();
  return run2(input);
};

export default {
  part1,
  part2,
};
