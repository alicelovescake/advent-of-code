
import { example, data } from './input'

export const inputParser = (input) => input.split('\n')

const parsedData = inputParser(data)

export const part1 = (input = parsedData) => {
  let x = 0;
  let y = 0;
  let aim = 0

  for (const step of input) {
    const [dir, val] = step.split(" ")
    console.log(dir,"VAL", val, "AIM", aim)
    
    switch (dir) {
      case "forward":
        x += parseInt(val);
        y += aim * parseInt(val);
        break;
      case "down":
        aim += parseInt(val);
        break;
      case "up":
        aim -= parseInt(val);
    }
  }
  return x * y
}

export const part2 = (input = parsedData) => {
  return
}

export default {
  part1,
  part2,
}
