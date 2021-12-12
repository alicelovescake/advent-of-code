
import { example, data } from './input'

export const inputParser = (input) => input.split('\n')
                                          .map((str) => str.split(' | '))
                                          .map((arr) => arr[1].split(' '))

const parsedData = inputParser(data)

export const part1 = (input = parsedData) => {
  const flat = input.flat()
  let sum = 0
  for (const output of flat) {
    if (output.length === 4 || output.length === 2 || output.length === 7 || output.length === 3 ) {
      sum += 1
    }
  }
  return sum
}

export const part2 = (input = parsedData) => {
  return
}

export default {
  part1,
  part2,
}
