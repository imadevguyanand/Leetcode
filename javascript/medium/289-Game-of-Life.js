/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 * @complexities Time => O(n * m) || Space => O(n * m), where n is the number of rows and m is the number of columns
 * @description Matrix traversal
 */
var gameOfLife = function (board) {
  const queue = []
  const OVER_POPULATION_COUNT = 3
  const UNDER_POPULATION_COUNT = 2
  const REPRODUCTION_POPULATION_COUNT = 3
  const DEAD = 0
  const LIVE = 1
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      let currentValue = board[row][col]
      const liveNeigborCount = getLiveNeigboursCount(board, row, col)
      if (currentValue === DEAD) {
        // Reproduction
        if (liveNeigborCount === REPRODUCTION_POPULATION_COUNT) {
          queue.push([row, col])
        }
      } else {
        if (liveNeigborCount > OVER_POPULATION_COUNT) {
          // Over population
          queue.push([row, col])
        }
        // Under population
        else if (liveNeigborCount < UNDER_POPULATION_COUNT) {
          queue.push([row, col])
        }
      }
    }
  }

  for (const position of queue) {
    const [row, col] = position
    if (board[row][col] === DEAD) {
      board[row][col] = LIVE
    } else {
      board[row][col] = DEAD
    }
  }
}

const getLiveNeigboursCount = (board, row, col) => {
  let liveNeigborCount = 0
  const rowLength = board.length
  const colLength = board[0].length

  // horizontal right
  if (col + 1 < colLength) {
    if (board[row][col + 1] === 1) {
      liveNeigborCount++
    }
  }

  // horizontal left
  if (col - 1 >= 0) {
    if (board[row][col - 1] === 1) {
      liveNeigborCount++
    }
  }

  // vertical down
  if (row + 1 < rowLength) {
    if (board[row + 1][col] === 1) {
      liveNeigborCount++
    }
  }

  // vertical up
  if (row - 1 >= 0) {
    if (board[row - 1][col] === 1) {
      liveNeigborCount++
    }
  }

  // diagonal up-left
  if (row - 1 >= 0 && col - 1 >= 0) {
    if (board[row - 1][col - 1] === 1) {
      liveNeigborCount++
    }
  }

  // diagonal up-right
  if (row - 1 >= 0 && col + 1 < colLength) {
    if (board[row - 1][col + 1] === 1) {
      liveNeigborCount++
    }
  }

  // diagonal down-right
  if (row + 1 < rowLength && col + 1 < colLength) {
    if (board[row + 1][col + 1] === 1) {
      liveNeigborCount++
    }
  }

  // diagonal down-left
  if (row + 1 < rowLength && col - 1 >= 0) {
    if (board[row + 1][col - 1] === 1) {
      liveNeigborCount++
    }
  }

  return liveNeigborCount
}

console.log(
  gameOfLife([
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ])
)
