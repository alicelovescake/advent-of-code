
import { example, data } from './input'

export const inputParser = (input) => input.split('\n').map((str) => str.split("").map(Number))

const parsedData = inputParser(data)

const getAbove = (input, r, c) => (r > 0 ? input[r - 1][c] : null)
const getBelow = (input, r, c) => (r < input.length - 1 ? input[r + 1][c] : null)
const getRight = (input, r, c) => (c < input.length - 1 ? input[r][c + 1] : null)
const getLeft = (input, r, c) => (c > 0 ? input[r ][c - 1] : null)

const isLowPoint = (input, r, c) => {

    const left = getLeft(input, r, c)
    const right = getRight(input, r, c)
    const top = getAbove(input, r, c)
    const bot = getBelow(input, r, c)

    return [left, right, top, bot].every((point) => !!point || point > input[r][c])
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
