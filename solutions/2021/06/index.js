
import { example, data } from './input'

export const inputParser = (input) => input.split(',').map(Number)

const parsedData = inputParser(data)

export const part1 = (input = parsedData, target = 256) => {
  const total = new Array(9).fill(0)
  for (const num of input) {
    total[num] += 1;
  }

  for (let i = 1; i <= target; i++) {
    const zeroYear = total[0]

    for (let j = 1; j < 9; j++) {
      total[j - 1] = total[j]
    }
    total[8] = zeroYear
    total[6] += zeroYear
  }
  
  return total.reduce((a, b) => a + b)
}

export const part2 = (input = parsedData) => {
  return
}

export default {
  part1,
  part2,
}
// new one every 7 days

// 18 days  total days % 7     5 -> 26

// total days 6 -> 0 6 -> 0 4 -> 0

// 2 * 7 + 4

// 3, 4, 3, 1, 2
// 0, 0 
// 6, 6    
// 0, 0    7 days
// 6, 6    
// 0, 0    7 days
// 6, 6
// 2, 2    4 days

// 18 fuel 
// 2 * 7 + 4
// 15 / 7
// 14 / 7
// 18 - 1/ 7 = 2 remainder 3

// total cycles = 2 * 5 = 10 new babies

// 5 * 3 + 2 * 2 + 5 * 1
// 15 + 4 + 5 = 24 zeros - 3 + 5 
// decr 
// find number of zeros, and number of zeros on last day
// find day that 8 

// 14 zeros, 14 eights created
// 0 : 3
// 3 : 0
// 4 :    8 (18 - 4 / 7)
// 10 : 0
// 11 :   8
// 17 : 0
// 18 :   8

// 8 pops up on day: initial + 1, + 7, + 7
// number of zeros, days zeros gets generated, 
// day 0
// { 3 : 2,}
//   4 : 1
//   1 : 1
//   2 : 1
 
// day 1
// { 3 : 1 }
//   4 : 0
//   1 : 1
//   2 : 2
//   0 : 1

// day 2
// { 3 : 1 }
//   4 : 0
//   1 : 1
//   2 : 2
//   0 : 1

// day 0
// [0, 1, 1, 2, 1, 0, 0, 0, 0]  number of fish 
//  0  1  2  3  4  5  6  7  8    age

// day 1
// [1, 1, 2, 1, 0, 0, 0, 0, 0]  number of fish 
//  0  1  2  3  4  5  6  7  8    age

// day 2
// [1, 2, 1, 0, 0, 0, 1, 0, 1]  number of fish 
//  0  1  2  3  4  5  6  7  8    age

