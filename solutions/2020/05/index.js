import dedent from "dedent";
import colors from "colors";
import input from "./input";

const getInput = () => input.split("\n");

const run = (input) => {
  let highestSeat = 0;

  for (let i = 0; i < input.length; i++) {
    let right = 127;
    let left = 0;
    let colRight = 7;
    let colLeft = 0;
    let p = 0;
    let p2 = 7;
    while (left < right) {
      let mid = left + Math.floor((right - left) / 2);
      if (input[i][p] === "F") {
        right = mid;
      } else {
        left = mid + 1;
      }
      p++;
    }

    while (colLeft < colRight) {
      let midCol = colLeft + Math.floor((colRight - colLeft) / 2);
      if (input[i][p2] === "R") {
        colLeft = midCol + 1;
      } else {
        colRight = midCol;
      }
      p2++;
    }
    highestSeat = Math.max(highestSeat, right * 8 + colRight);
  }
  return highestSeat;
};

const run2 = (input) => {
  const seatArray = [];

  for (let i = 0; i < input.length; i++) {
    let right = 127;
    let left = 0;
    let colRight = 7;
    let colLeft = 0;
    let p = 0;
    let p2 = 7;
    while (left < right) {
      let mid = left + Math.floor((right - left) / 2);
      if (input[i][p] === "F") {
        right = mid;
      } else {
        left = mid + 1;
      }
      p++;
    }

    while (colLeft < colRight) {
      let midCol = colLeft + Math.floor((colRight - colLeft) / 2);
      if (input[i][p2] === "R") {
        colLeft = midCol + 1;
      } else {
        colRight = midCol;
      }
      p2++;
    }
    seatArray.push(right * 8 + colRight);
  }
  seatArray.sort((a, b) => a - b);
  for (let i = 1; i < seatArray.length; i++) {
    if (seatArray[i - 1] !== seatArray[i] - 1) {
      return seatArray[i] - 1;
    }
  }
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
