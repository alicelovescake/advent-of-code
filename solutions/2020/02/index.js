import dedent from "dedent";
import colors from "colors";
import input from "./input";

const getInput = () => input.split("\n");

const countPassword = (input) => {
  let valid = 0;
  for (let i = 0; i < input.length; i++) {
    const [_, min, max, letter, password] = input[i].match(
      /(\d+)-(\d+) (\w)\: (\w+)/
    );
    let count = 0;
    for (let l of password) {
      if (l === letter) {
        count++;
      }
    }

    if (count >= min && count <= max) {
      valid++;
    }
  }
  return valid;
};

const countPositions = (input) => {
  let valid = 0;
  for (let i = 0; i < input.length; i++) {
    const [_, min, max, letter, password] = input[i].match(
      /(\d+)-(\d+) (\w)\: (\w+)/
    );

    if ((password[max - 1] === letter) ^ (password[min - 1] === letter)) {
      valid++;
    }
  }
  return valid;
};

const part1 = () => {
  const input = getInput();
  return countPassword(input);
};

const part2 = () => {
  const input = getInput();
  return countPositions(input);
};

export default {
  part1,
  part2,
};
