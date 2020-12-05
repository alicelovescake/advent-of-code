import dedent from "dedent";
import colors from "colors";
import input from "./input";

const getInput = () => input.split("\n\n");

const run = (input) => {
  let valid = 0;
  let array = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
  for (let passport of input) {
    let count = 0;
    for (let entry of array) {
      if (passport.includes(entry)) {
        count++;
      }
    }
    if (count === 7) {
      valid++;
    }
  }
  return valid;
};

const part1 = () => {
  const input = getInput();
  return run(input);
};

const part2 = () => {
  const input = getInput();
  run(input);
};

export default {
  part1,
  part2,
};
