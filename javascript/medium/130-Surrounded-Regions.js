/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 * @complexities Time => O(n * m) | Space => O(n * m)
 * @description DFS
 */
var solve = function (matrix) {
  // Write your code here.
  const rowLength = matrix.length
  const onesConnectedToBorder = getAuxilaryMatrix(matrix)
  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      const isRowBorder = row === 0 || row === rowLength - 1 ? true : false
      const isColBorder = col === 0 || col === matrix[row].length - 1 ? true : false
      const isBorder = isColBorder || isRowBorder
      if (!isBorder) {
        continue
      }

      if (matrix[row][col] != "O") {
        continue
      }
      //DFS
      findOnesConnectedToBorder(matrix, row, col, onesConnectedToBorder)
    }
  }

  // Update to 0
  for (let row = 1; row < rowLength - 1; row++) {
    for (let col = 1; col < matrix[row].length - 1; col++) {
      if (onesConnectedToBorder[row][col]) {
        continue
      }
      matrix[row][col] = "X"
    }
  }
  return matrix
}

function findOnesConnectedToBorder(matrix, startRow, startCol, onesConnectedToBorder) {
  const stack = [[startRow, startCol]]
  while (stack.length > 0) {
    const currentPosition = stack.pop()
    const [currentRow, currentCol] = currentPosition
    const alreadyVisited = onesConnectedToBorder[currentRow][currentCol]
    if (alreadyVisited) {
      continue
    }

    onesConnectedToBorder[currentRow][currentCol] = true
    const neighbors = getNeighbors(matrix, currentRow, currentCol)
    for (const neighbor of neighbors) {
      const [row, col] = neighbor
      if (matrix[row][col] != "O") {
        continue
      }
      stack.push(neighbor)
    }
  }
}

function getNeighbors(matrix, row, column) {
  const neighbors = []
  const numRows = matrix.length
  const numCols = matrix[row].length
  if (row - 1 >= 0) {
    neighbors.push([row - 1, column])
  }
  if (row + 1 < numRows) {
    neighbors.push([row + 1, column])
  }
  if (column - 1 >= 0) {
    neighbors.push([row, column - 1])
  }
  if (column + 1 < numCols) {
    neighbors.push([row, column + 1])
  }
  return neighbors
}

function getAuxilaryMatrix(matrix) {
  const rowLength = matrix.length
  const onesConnectedToBorder = []
  // Auxilary 2d matrix
  for (let row = 0; row < rowLength; row++) {
    onesConnectedToBorder.push([])
    for (let col = 0; col < matrix[row].length; col++) {
      onesConnectedToBorder[row].push(false)
    }
  }
  return onesConnectedToBorder
}
