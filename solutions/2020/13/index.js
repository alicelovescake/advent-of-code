import dedent from "dedent";
import colors from "colors";
import input from "./input";

const getInput = () => input.split("\n");

const run = (input) => {
  const buses = input[1].split(",");
  const timeStamp = +input[0];
  const availableBuses = buses.filter((bus) => bus !== "x");
  let minTime = [Infinity, 0];
  for (let i = 0; i < availableBuses.length; i++) {
    let time = timeStamp;
    while (time < timeStamp + Math.max(...availableBuses)) {
      if (time % availableBuses[i] === 0 && time < minTime[0]) {
        minTime = [time, availableBuses[i]];
        break;
      }
      time++;
    }
  }
  return (minTime[0] - timeStamp) * minTime[1];
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
