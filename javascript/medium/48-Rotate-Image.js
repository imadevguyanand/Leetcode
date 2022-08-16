/**
 * @param {number[][]} matrix
 * @return {void}
 * @complexities Time => O(n^2) | Space => O(1)
 * @description 2 step with transpose and 2 pointer swap
 */
var rotate = function (matrix) {
  const rowLength = matrix.length
  const colLength = matrix[0].length
  // Transpose
  for (let i = 0; i < rowLength; i++) {
    for (let j = i; j < colLength; j++) {
      let temp = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = temp
    }
  }

  // 2 Pointer
  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < Math.floor(rowLength / 2); j++) {
      let temp = matrix[i][j]
      matrix[i][j] = matrix[i][rowLength - 1 - j]
      matrix[i][rowLength - 1 - j] = temp
    }
  }

  return matrix
}

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
)
