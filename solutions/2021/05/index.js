
import { example, data } from './input'

export const inputParser = (input) => input.split('\n').map((seg) => seg.split(" -> ").map((coord) => coord.split(",").map(Number)))

const parsedData = inputParser(example)
const isValid = (coord) => {
  const [coordA, coordB] = coord;
  const horizontal = coordA[0] === coordB[0];
  const vert = coordA[1] === coordB[1]


  return horizontal || vert 
}

const isDiag = (coord) => {
  const [coordA, coordB] = coord;
  return Math.abs(coordA[0] - coordB[0]) === Math.abs(coordA[1] - coordB[1])
}

// // coordA > || < coordB
// // x axis changing or y axis changing
// const countSteps = (totalCount, coord) => {
//   const [coordA, coordB] = coord;
//   let key = "";
//   const changingAxis = coordA[0] === coordB[0] ? 'y' : 'x'
//   const idx = coordA[0] === coordB[0] ? 1 : 0
  
//   for (let i = Math.min(coordA[idx], coordB[idx]); i <= Math.max(coordA[idx], coordB[idx]); i++) {
//     if (changingAxis === "x"){
//       key = "x" + i + "y" + coordA[1]
//     } else {
//       key = "x" + coordA[0] + "y" + i
//     }
//     totalCount[key] = (totalCount[key] || 0) + 1
//   }
// }

const countSteps= (totalCount, coord) => {
  // x + 1, y + 1 || x + 1, y - 1 || x - 1, y - 1 || x - 1, y + 1 
  // x big y big    x big  y sm     x sm y sm       x sm ybig
  const [coordA, coordB] = coord;
  const diff = coordA[0] === coordB[0] ?  Math.abs(coordA[1] - coordB[1]) : Math.abs(coordA[0] - coordB[0])
  const [xFunct, yFunct] = createComparasionFuction(coordA, coordB)

  for (let i = 0; i <= diff; i++) {
    let xVal = xFunct(coordA[0], i)
    let yVal = yFunct(coordA[1], i)
    let key = "x" + xVal + "y" + yVal
    totalCount[key] = (totalCount[key] || 0) + 1
  }
}

const createComparasionFuction = (coordA, coordB) => {
  const addition = (a, b) => a + b
  const subtraction = (a, b) => a - b
  const same = (a, b) => a
  if (coordB[0] > coordA[0] && coordB[1] > coordA[1]) {
    return [addition, addition]
  } else if (coordB[0] > coordA[0] && coordB[1] < coordA[1]) {
    return [addition, subtraction]
  } else if (coordB[0] < coordA[0] && coordB[1] < coordA[1]) {
    return [subtraction, subtraction]
  } else if (coordB[0] < coordA[0] && coordB[1] > coordA[1]) {
    return [subtraction, addition]
  } else if (coordB[0] === coordA[0] && coordB[1] > coordA[1]) {
    return [same, addition]
  } else if (coordB[0] === coordA[0] && coordB[1] < coordA[1]) {
    return [same, subtraction]
  } else if (coordB[0] < coordA[0] && coordB[1] === coordA[1]) {
    return [subtraction, same]
  } else if (coordB[0] > coordA[0] && coordB[1] === coordA[1]) {
    return [addition, same]
  }
}

const totalOverlap = (totalCount) => {
  let count = 0;
  Object.values(totalCount).forEach((num) => {
    if (num > 1){
      count++;
    }
  })
  return count
}

export const part1 = (input = parsedData) => {
  const totalCount = {}
  for (const coord of input) {
    if (isValid(coord)) {
      countSteps(totalCount, coord)
    }
  }
  return totalOverlap(totalCount)
}

export const part2 = (input = parsedData) => {
  const totalCount = {}
  for (const coord of input) {
    if (isValid(coord) || isDiag(coord)) {
      countSteps(totalCount, coord)
    } 
  }
  return totalOverlap(totalCount)
}

export default {
  part1,
  part2,
}

/**
 * Goal: number of points > 1
 * 
 * Constraints:
 * - only process pairs if x1 === x2 or y1 === y2
 * 
 * Approach:
 * 1. Parse Input: {[x1, y1], [x2, y2]}, 
 * 2. check pair is valid
 * 3. keep count of coordinates object { x9y10 = 1 }
 */