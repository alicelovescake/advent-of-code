
import { example, data } from './input'

export const inputParser = (input) => input.split('\n').map((str) => str.split("").map(Number))

const parsedData = inputParser(data)

const isLowPoint = (input, r, c) => {
    const left = input[r - 1] !== undefined ? input[r - 1][c] : Infinity
    const right = input[r + 1] !== undefined ? input[r + 1][c] : Infinity
    const top = input[r][c + 1] !== undefined ? input[r][c + 1] : Infinity
    const bot = input[r][c - 1] !== undefined ?  input[r][c - 1] : Infinity

    if (left === input[r][c] || right === input[r][c] || top === input[r][c]|| bot ===input[r][c]) {
      return false
    }
    const allNums = [left, right, top, bot, input[r][c]]

    return Math.min(...allNums) === input[r][c]
}

const dfs = (input, r, c) => {
  if (input[r] === undefined || input[r][c] === undefined || input[r][c] === 9 || input[r][c] === -1) {
    return 0
  }
 
  input[r][c] = -1
  return 1 + dfs(input, r + 1, c) + dfs(input, r - 1, c) + dfs(input, r, c + 1) + dfs(input, r , c - 1);
}

export const part1 = (input = parsedData) => {
  let sum = 0;
  
  for (let r = 0; r < input.length; r++) {
    for (let c = 0; c < input[r].length; c++) {
      if (isLowPoint(input, r, c)) {
        sum += input[r][c] + 1
      }
    }
  }

  return sum
}

export const part2 = (input = parsedData) => {
  const basins = [];
  for (let r = 0; r < input.length; r++) {
    for (let c = 0; c < input[r].length; c++) {
      if (isLowPoint(input, r, c)) {
       const count = dfs(input, r, c);
        basins.push(count)
      }
    }
  }
  basins.sort((a, b) => b - a)
  return basins[0] * basins[1] * basins[2]
}

export default {
  part1,
  part2,
}
