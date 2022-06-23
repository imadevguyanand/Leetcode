/**
 * @param {number[][]} grid
 * @return {number}
 * @complexities Time => O(n * m) where n is the width of the grid and m is the height of the grid | Space => O(1)
 * @description This is a Dynamic Problem
 */
var minPathSum = (grid) => {
  let row = grid.length
  let col = grid[0].length

  // First row
  for (let i = 1; i < col; i++) {
    grid[0][i] += grid[0][i - 1]
  }

  // First col
  for (let j = 1; j < row; j++) {
    grid[j][0] += grid[j - 1][0]
  }

  // Inner rows and columns
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1])
    }
  }
  return grid[row - 1][col - 1]
}

console.log(
  minPathSum([
    [1, 2, 3],
    [4, 5, 6],
  ])
)
