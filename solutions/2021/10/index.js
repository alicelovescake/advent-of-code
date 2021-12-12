
import { example, data } from './input'

export const inputParser = (input) => input.split('\n')

const parsedData = inputParser(data)

const score = {
  ')': 3,
  ']': 57,
  '}': 1197,
  '>': 25137,
}

const illegalCount = {
  ')': 0,
  ']': 0,
  '}': 0,
  '>': 0,
}
const complement = {
  ')' : '(',
  ']' : '[',
  '}' : '{',
  '>' : '<',
  '(' : ')',
  '[' : ']',
  '{' : '}',
  '<' : '>',
}

const openBracket = {
  '(': 0,
  '[': 0,
  '{': 0,
  '<': 0,
}


const processSegment = (seg) => {
  const stack = []
  for (const char of seg) {
    if (char in openBracket) {
      stack.push(char)
    } else {
      if (!stack.length) {
        illegalCount[char]++;
        return;
      } else {
        const potientialPair = stack[stack.length - 1];
        if (complement[char] === potientialPair) {
          stack.pop()
        } else {
          illegalCount[char]++;
          return;
        }
      }
    }
  }
  return stack
}

export const part1 = (input = parsedData) => {
  

  for (const seg of input) {
    processSegment(seg)
  }

  const sum = Object.keys(illegalCount).reduce(((prev, currKey) => prev + illegalCount[currKey] * score[currKey]), 0)
  return sum
}

const scorePart2 = {
  ')': 1,
  ']': 2,
  '}': 3,
  '>': 4,
}

export const part2 = (input = parsedData) => {
  const allScores = []
  for (const seg of input) {
    const stack = processSegment(seg)
    if (!stack) continue;
    let scoreSoFar = 0
    for (let i = stack.length - 1; i >= 0; i--) {
      scoreSoFar *= 5 
      const comp = complement[stack[i]]
      scoreSoFar += scorePart2[comp]
    }
    allScores.push(scoreSoFar)
  }
  allScores.sort((a, b) => a - b);
  const mid = Math.floor(allScores.length / 2)
  return allScores[mid]
}

export default {
  part1,
  part2,
}


// [({([[{{