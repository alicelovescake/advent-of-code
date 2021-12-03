
import { example, data } from './input'

export const inputParser = (input) => input.split('\n')

const parsedData = inputParser(data)

export const part1 = (input = parsedData) => {
  console.log(input)
  const gemma = new Array(input[0].length).fill(0);

  for (const seg of input) {
    for (let i = 0; i < seg.length; i++) {
      if (seg[i] === "0") {
        gemma[i] -= 1
      } else {
        gemma[i] += 1
      }
    }
  }

  
  const gemmaFinal = gemma.map((num) =>  num > 1 ? 1 : 0) 
  const ep = gemma.map((num) =>  num > 1 ? 0 : 1) 


  const x = parseInt(gemmaFinal.join(""), 2)
  
  const y = parseInt(ep.join(""), 2)
  return x * y
}

export const part2 = (input = parsedData) => {
  const oxygen = filter(input, true)
  const CO2 = filter(input, false)

  const x = parseInt(oxygen, 2)
  const y = parseInt(CO2, 2)
  
  return x * y
}

const filter = (input, most) => {
  for (let i = 0; i < input[0].length; i++) {
    const bit = helper(i, input, most)
    
    input = input.filter((seg) => parseInt(seg[i]) === bit)
    
    if (input.length === 1) {
      return input[0]
    }
  }
}

const helper = (currBit, input, most) => {
  let bit = 0
  for (const seg of input) {
    bit += seg[currBit] === "1" ? 1 : -1
  }

  if ((most && bit >= 0) || (!most && bit < 0)) {
    return 1
  } else {
    return 0
  }
}

export default {
  part1,
  part2,
}
