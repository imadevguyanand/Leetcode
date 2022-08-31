/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * @complexities Time => O(n * m) | Space => O(1), where n is the no of row and m is the no of columns
 * @description Binary search and matrix traversal
 */
var searchMatrix = function (matrix, target) {
  const rowLength = matrix.length
  const colLength = matrix[0].length
  let row = 0
  let col = colLength - 1
  while (row < rowLength && col >= 0) {
    let currentValue = matrix[row][col]
    if (currentValue === target) {
      return true
    } else if (currentValue > target) {
      col--
    } else {
      row++
    }
  }

  return false
}

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    13
  )
)
