import dedent from 'dedent'
import colors from 'colors'
import input from './input'

const getInput = () => input.split(/\n/).map(Number)

const run = (input) => {
  let count = 0;
  for (let i = 1; i < input.length; i++) {
    if (input[i] > input[i - 1]) {
      count++;
    }
  }

  return count
}
// 
const run2 = (input) => {
  let currSum = input[0] + input[1] + input[2]
  let start = 0
  let count = 0
  for (let end = 3; end < input.length; end += 1) {
    let nextSum = currSum - input[start] + input[end]
    if (nextSum > currSum) {
      count++;
    }
    currSum = nextSum;
    start++;
  }

  return count
}

const part1 = () => {
  const input = getInput()
  return run(input)
}

const part2 = () => {
  const input = getInput()
  return run2(input)
}

export default {
  part1,
  part2,
}
