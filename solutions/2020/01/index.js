import dedent from "dedent";
import colors from "colors";
import input from "./input";

const getInput = () => input.split("\n").map(Number);

const twoSum = (input) => {
  input.sort((a, b) => a - b);
  let right = input.length - 1;
  let left = 0;

  for (let i = 0; i < input.length; i++) {
    let potentialMatch = input[right] + input[left];

    if (potentialMatch > 2020) {
      right--;
    } else if (potentialMatch < 2020) {
      left++;
    } else {
      return input[right] * input[left];
    }
  }
};

const threeSum = (input) => {
  input.sort((a, b) => a - b);

  for (let i = 0; i < input.length; i++) {
    let right = input.length - 1;
    let left = i + 1;
    while (left < right) {
      let potentialMatch = input[i] + input[right] + input[left];
      if (potentialMatch > 2020) {
        right--;
      } else if (potentialMatch < 2020) {
        left++;
      } else {
        return input[right] * input[left] * input[i];
      }
    }
  }
};

const part1 = () => {
  const input = getInput();
  return twoSum(input);
};

const part2 = () => {
  const input = getInput();
  return threeSum(input);
};

export default {
  part1,
  part2,
};
