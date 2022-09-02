/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const neigboursToUpdate = getConnectedZeros(matrix)
  updateToZero(matrix, neigboursToUpdate)
  return matrix
}

/**
 *
 * @param {[][]} matrix
 * @return {queue[]}
 * @complexities Time => O(n * m) | Space => O(n + m), where n is the number of rows and m is the number of columns
 */
const getConnectedZeros = (matrix) => {
  const queue = []
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      const currentValue = matrix[row][col]
      if (currentValue === 0) {
        const neigbours = getNeigbours(matrix, row, col)
        for (const neigbour of neigbours) {
          const [neigbourRow, neigbourCol] = neigbour
          queue.push([neigbourRow, neigbourCol])
        }
      }
    }
  }
  return queue
}

/**
 *
 * @param {*} matrix
 * @return {number[][]} matrix
 * @complexities Time => O(n + m) | Space => O(n + m)
 */
const getNeigbours = (matrix, row, col) => {
  const rowLength = matrix.length
  const colLength = matrix[row].length
  const neigbours = []

  // up
  for (let neigbourRow = row - 1; neigbourRow >= 0; neigbourRow--) {
    neigbours.push([neigbourRow, col])
  }

  // down
  for (let neigbourRow = row + 1; neigbourRow < rowLength; neigbourRow++) {
    neigbours.push([neigbourRow, col])
  }

  // right
  for (let neigbourCol = col + 1; neigbourCol < colLength; neigbourCol++) {
    neigbours.push([row, neigbourCol])
  }

  // left
  for (let neigbourCol = col - 1; neigbourCol >= 0; neigbourCol--) {
    neigbours.push([row, neigbourCol])
  }

  return neigbours
}

const updateToZero = (matrix, positions) => {
  for (const position of positions) {
    const [row, col] = position
    matrix[row][col] = 0
  }
}

console.log(
  setZeroes([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ])
)
