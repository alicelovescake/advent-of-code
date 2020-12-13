import dedent from "dedent";
import colors from "colors";
import input from "./input";

const getInput = () => input.split("\n");

const run = (input) => {
  let start = 0;
  let curr = 0;
  while (true) {
    if (input[start] === true) {
      break;
    }

    const [instructions, value] = input[start].split(" ");

    input[start] = true;
    if (instructions === "nop") {
      start = (start + 1) % input.length;
    }
    if (instructions === "acc") {
      curr += +value;
      start = (start + 1) % input.length;
    }
    if (instructions === "jmp") {
      start = (start + parseInt(value)) % input.length;
    }
  }
  return curr;
};

const run2 = (input) => {
  const instructions = input.map((input) => input.split(" "));
  for (let i = 0; i < input.length; i++) {
    let temp = instructions[i][0];
    if (temp === "acc") {
      continue;
    }
    instructions[i][0] = temp === "jmp" ? "nop" : "jmp";

    let pos = 0;
    let curr = 0;
    const executed = new Set();
    while (!executed.has(pos)) {
      executed.add(pos);
      const [instruction, value] = instructions[pos];
      switch (instruction) {
        case "acc":
          curr += +value;
          pos++;
          break;
        case "nop":
          pos++;
          break;
        case "jmp":
          pos += +value;
          break;
      }
      if (pos >= instructions.length) {
        return curr;
      }
    }
    instructions[i][0] = temp;
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
