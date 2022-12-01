
import { example, data } from './input'

export const inputParser = (input) => input.split('\n').map((str) => str.split("").map(Number))

const parsedData = inputParser(example)

const getBot = (input, [r, c]) => r < input.length - 1 ? [r + 1, c] : null
const getTop = (input, [r, c]) => r > 0 ? [r - 1, c] : null
const getRight = (input, [r, c]) => c < input.length - 1? [r, c + 1] : null
const getLeft = (input, [r, c]) => c > 0 ? [r, c - 1] : null
const getDiagTopLeft = (input, [r, c]) => c > 0 && r > 0 ? [r - 1, c - 1] : null
const getDiagTopRight = (input, [r, c]) => c < input.length - 1 && r > 0 ? [r - 1, c + 1] : null
const getDiagBotLeft = (input, [r, c]) => c > 0  && r < input.length - 1  ? [r + 1, c - 1] : null
const getDiagBotRight = (input, [r, c]) => c < input.length - 1  && r < input.length - 1 ? [r + 1, c + 1] : null

const getPoints = (input, [r, c]) => {
 
 return [getBot, getTop, getRight, getLeft, 
        getDiagTopLeft, getDiagTopRight, getDiagBotLeft,
        getDiagBotRight].map((fn) => fn(input, [r, c]))
}

const incrementPoints = (input, [r, c]) => {
  let count = 0
  const points = getPoints(input, [r, c]);
  points.forEach((point) => {
    if (point && input[point[0]][point[1]]) {
      const [row, col] = point;
      input[row][col]++
      if (input[row][col] > 9) {
        count++;
        const [newCount, newInput] = incrementPoints(input, [r, c])
        newInput[row][col] = 0
        count += newCount
      }
    }
  })

  return [count, input]
}



const countFlashes = input => {
  let count = 0
  for (let r = 0; r < input.length; r++) {
    for (let c = 0; c < input[r].length; c++) {
      input[r][c]++
      if (input[r][c] > 9) {
        count++;
        const [newCount, newInput] = incrementPoints(input, [r, c])
        newInput[r][c] = 0
        count += newCount
      }
    }
  }
  // console.log("INPUT AFTER COUNT", input)
  return [count, input]
}

export const part1 = (input = parsedData) => {
  let totalFlashes = 0;
  for (let i = 1; i <= 2; i++) {
    const [count, newInput] = countFlashes(input)
    totalFlashes += count
    input = newInput
  }
  return totalFlashes;
}

export const part2 = (input = parsedData) => {
  return
}

export default {
  part1,
  part2,
}
