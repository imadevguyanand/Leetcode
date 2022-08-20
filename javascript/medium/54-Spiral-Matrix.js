/**
 *
 * @param {number[][]} matrix
 * @return {number[]}
 * @complexities Time => O(n) | Space => O(n), Total number of elements in the matrix
 * @description Matrix traverse
 */
var spiralOrder = function (matrix) {
  // Write your code here.
  let startRow = 0
  let startCol = 0
  let endRow = matrix.length - 1
  let endCol = matrix[0].length - 1
  const result = []

  while (startRow <= endRow && startCol <= endCol) {
    for (let col = startRow; col <= endCol; col++) {
      result.push(matrix[startRow][col])
    }

    for (let row = startRow + 1; row <= endRow; row++) {
      result.push(matrix[row][endCol])
    }

    for (let col = endCol - 1; col >= startCol; col--) {
      // If the matrix is not n * n add the edge cases
      if (startRow === endRow) {
        break
      }
      result.push(matrix[endRow][col])
    }

    for (let row = endRow - 1; row > startRow; row--) {
      // If the matrix is not n * n add the edge cases
      if (startCol === endCol) {
        break
      }
      result.push(matrix[row][startCol])
    }

    startRow++
    endRow--
    startCol++
    endCol--
  }

  return result
}

console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7],
  ])
)
