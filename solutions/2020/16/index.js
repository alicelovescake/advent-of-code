import dedent from "dedent";
import colors from "colors";
import input from "./input";

const getInput = () => input.split("nearby tickets:");

const run = (input) => {
  const regRules = /\d*-\d*/g;
  let rules = input[0].match(regRules);
  rules = rules.map((x) => x.split("-"));
  for (let i = 0; i < rules.length; i++) {
    rules[i] = rules[i].map(Number);
  }
  let nearbyTickets = input[1].match(/\d+/g);
  nearbyTickets = nearbyTickets.map(Number);
  let ans = 0;
  for (let num of nearbyTickets) {
    let valid = false;
    for (let i = 0; i < rules.length; i++) {
      if (num <= rules[i][1] && num >= rules[i][0]) {
        valid = true;
      }
    }
    if (!valid) {
      ans += num;
    }
  }

  return ans;
};

// const run2 = (input) => {
//   const regRules = /\d*-\d*/g;
//   let rules = input[0].match(regRules);
//   rules = rules.map((x) => x.split("-"));
//   for (let i = 0; i < rules.length; i++) {
//     rules[i] = rules[i].map(Number);
//   }
//   let nearbyTickets = input[1].trim().split("\n");
//   // nearbyTickets = nearbyTickets.map(Number);
//   let invalid = [];

//   // let valid = nearbyTickets.filter((num) => !invalid.includes(num));

//   console.log(nearbyTickets);
// };

const part1 = () => {
  const input = getInput();
  return run(input);
};

const part2 = () => {
  const input = getInput();
  // return run2(input);
};

export default {
  part1,
  part2,
};
