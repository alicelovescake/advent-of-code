import { example, data } from "./input";

export const inputParser = (input) => input.split("\n");

const parsedData = inputParser(data);

const parseBoard = (input) => {
  const bingo = input[0].split(",");
  const boardsInput = input.slice(2);
  const boards = [];
  let board = [];
  for (const row of boardsInput) {
    if (row) {
      board.push(row.split(" ").filter(Boolean));
    } else {
      boards.push(board);
      board = [];
    }
  }
  boards.push(board);
  return [bingo, boards];
};

const lookupTable = (boards) => {
  const lookups = [];
  for (const board of boards) {
    const lookup = {};
    for (let r = 0; r < board.length; r++) {
      for (let c = 0; c < board[r].length; c++) {
        lookup[board[r][c]] = [r, c];
      }
    }
    lookups.push(lookup);
  }

  return lookups;
};

const calculateWinner = (board) => {

  for (let r = 0; r < board.length; r++) {
    const streak = board[r].filter((num) => Number.isInteger(num));
    if (streak.length === board.length) return true;
  }


  for (let c = 0; c < board[0].length; c++) {
    for (let r = 0; r < board.length; r++) {
  
      if (!Number.isInteger(board[r][c])) {
        break;
      }

      if (r === board.length - 1 && Number.isInteger(board[r][c])) {
        return true;
      }
    }
  }

  return false;
};


const calculateScore = (num, winnerBoard) => {
  let sum = 0;
  for (let r = 0; r < winnerBoard.length; r++) {
    for (let c = 0; c < winnerBoard[r].length; c++) {
      if (!Number.isInteger(winnerBoard[r][c])) {
        sum += parseInt(winnerBoard[r][c]);
      }
    }
  }
  return parseInt(num) * sum;
};

const markBoards = (targetNum, lookups, boards) => {
  for (let i = 0; i < lookups.length; i++) {
    if (lookups[i][targetNum]) {
      const [row, col] = lookups[i][targetNum];
      boards[i][row][col] = parseInt(boards[i][row][col]);
    }
  }
};

export const part1 = (input = parsedData) => {
  const [bingo, boards] = parseBoard(input);
  const lookups = lookupTable(boards);

  for (const num of bingo) {
    markBoards(num, lookups, boards);
    for (const board of boards) {
      const isWinner = calculateWinner(board)
      if (isWinner) {
        return calculateScore(num, board);
      }
    }
  }

  return "no winners";
};
// for each number, check winner on all boards
// winner -> calculate score and take it out
export const part2 = (input = parsedData) => {
  const [bingo, boards] = parseBoard(input);
  const lookups = lookupTable(boards);
  const winners = new Set();
  let prevWinnerScore = null;
  for (const num of bingo) {
    markBoards(num, lookups, boards);
    for (const [boardIdx, board] of boards.entries()) {
      const isWinner = calculateWinner(board)
      if (isWinner && !winners.has(boardIdx)) {
       
        prevWinnerScore = calculateScore(num, board);
        winners.add(boardIdx);
      }
    }
  }
  return prevWinnerScore;
};

export default {
  part1,
  part2,
};

/**
 * multiple winnerBoards
 * Needed:
 * 1. Marked/ unmarked positions on each board
 * 2. Order of numbers
 *
 * Constrains:
 * 1. Winning: row or columns (R* marked or *C)
 *
 * Approach:
 * 1. Function that checks for winner (sort based on index [0][i], if [0][i] === [0][i + 4])
 * 2. Replicate board 0/1 for marked (array with coordinates of marked)
 * 3. Lookup table that stores number as key and position as value
 *
 */
