import dedent from "dedent";
import colors from "colors";
import input from "./input";

const getInput = () => input.split("\n");

const run = (input) => {
  let mask = 0;
  const map = {};

  for (let i = 0; i < input.length; i++) {
    let [address, value] = input[i].split(" = ");
    if (address === "mask") {
      mask = value;
      continue;
    }

    let newValue = (value >>> 0).toString(2).padStart(36, "0").split("");

    for (let i = 0; i < newValue.length; i++) {
      if (mask[i] !== "X") {
        newValue[i] = mask[i];
      }
    }
    map[address] = parseInt(newValue.join(""), 2);
  }
  return Object.values(map).reduce((acc, curr) => acc + curr);
};

const part1 = () => {
  const input = getInput();
  return run(input);
};

const part2 = () => {
  const input = getInput();
  // run(input);
};

export default {
  part1,
  part2,
};
