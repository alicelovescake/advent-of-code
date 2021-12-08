
import { example, data } from './input'

export const inputParser = (input) => input.split(',').map(Number)

const parsedData = inputParser(example)

export const part1 = (input = parsedData) => {
  
  input.sort((a, b) => a - b)

  const mid = Math.floor(input.length / 2)
  const target = input[mid]
  console.log(input)
  return input.reduce((acc, curr) => acc + Math.abs(target - curr), 0)
}

const getSum = (diff) => {
  let sum = 0;
  for (let i = diff; i > 0; i--) {
    sum += i
  }
  return sum
}

export const part2 = (input = parsedData) => {
  // input.sort((a, b) => a - b)
  // const mid = Math.floor(input.length / 2)
  // const median = input[mid]
  // let smallestSoFar = getFuel(input, median)

  // let l = 0;
  // let r = input[input.length - 1]

  // while (l < r) {
  //   const mid = Math.floor((r + l)/ 2)
  //   const currFuel = getFuel(input, mid)
  //   if (currFuel > smallestSoFar) {

  //   }
  //   return currFuel

  // }
  const cumSum = input.reduce((a, b) => a + b)
  const avg = Math.floor(cumSum / input.length)

  
  return getFuel(input, avg)
}

const getFuel = (input, target) => {
  let sum = 0
  for (const num of input) {
    let diff = Math.abs(target - num)
    sum += getSum(diff)
  }
  return sum
}


export default {
  part1,
  part2,
}
