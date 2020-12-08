import dedent from "dedent";
import colors from "colors";
import input from "./input";

const getInput = () => input.split("\n");
const parseRules = (rawRules) => {
  const rules = {};
  for (let i = 0; i < rawRules.length; i++) {
    const [rawParent, rawChildren] = rawRules[i].split("contain");
    const parent = rawParent.match(/^(.*?)bags/)[1].trim();
    rules[parent] = {};
    rawChildren.split(",").forEach((x) => {
      const child = x.match(/(\d)(.*?)bag/);

      if (child) {
        const value = child[1];
        const childBag = child[2].trim();
        rules[parent][childBag] = +value;
      }
    });
  }
  return rules;
};
const run = (input) => {
  const rules = parseRules(input);
  const ans = new Set();
  const stack = ["shiny gold"];

  while (stack.length) {
    const currBag = stack.pop();
    for (const [bag, bagRules] of Object.entries(rules)) {
      if (bagRules[currBag]) {
        ans.add(bag);
        stack.push(bag);
      }
    }
  }

  return ans.size;
};

const run2 = (input) => {
  const rules = parseRules(input);

  const getBagCount = (bag) => {
    let count = 0;

    for (const [childBag, quantity] of Object.entries(rules[bag])) {
      count += quantity + getBagCount(childBag) * quantity;
    }
    return count;
  };
  return getBagCount("shiny gold");
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
