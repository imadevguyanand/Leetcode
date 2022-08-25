/**
 * @param {character[][]} grid
 * @return {number}
 * @complexities = Time => O(n * m) | Space => O(n * m), where n and m are the rows and col of the grid
 * @descripition Matrix traversal using dfs or bfs
 */
var numIslands = function (grid) {
  const auxilaryGrid = constructAuxilaryGrid(grid)
  return getNumberOfIslands(grid, auxilaryGrid)
}

const getNumberOfIslands = (grid, auxilaryGrid) => {
  let numberOfIslands = 0
  const rowLength = grid.length
  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === "1" && !auxilaryGrid[row][col]) {
        numberOfIslands++
        depthFirstSerach(row, col, grid, auxilaryGrid)
      }
    }
  }

  return numberOfIslands
}

const depthFirstSerach = (row, col, grid, auxilaryGrid) => {
  const stack = []
  stack.push([row, col])
  while (stack.length > 0) {
    const [currentRow, currentCol] = stack.pop()
    auxilaryGrid[currentRow][currentCol] = true
    const neighbors = getNeighbors(grid, currentRow, currentCol)
    for (const neighbor of neighbors) {
      const [neighborRow, neighborCol] = neighbor
      const alreadyVisited = auxilaryGrid[neighborRow][neighborCol]
      if (!alreadyVisited && grid[neighborRow][neighborCol] === "1") {
        stack.push([neighborRow, neighborCol])
      }
    }
  }
}

const breathFirstSerach = (row, col, grid, auxilaryGrid) => {
  const queue = []
  queue.push([row, col])
  while (queue.length > 0) {
    const [currentRow, currentCol] = queue.shift()
    auxilaryGrid[currentRow][currentCol] = true
    const neighbors = getNeighbors(grid, currentRow, currentCol)
    for (const neighbor of neighbors) {
      const [neighborRow, neighborCol] = neighbor
      const alreadyVisited = auxilaryGrid[neighborRow][neighborCol]
      if (!alreadyVisited && grid[neighborRow][neighborCol] === "1") {
        queue.push([neighborRow, neighborCol])
      }
    }
  }
}

const getNeighbors = (grid, row, col) => {
  const neighbors = []
  const rowLength = grid.length
  const colLength = grid[0].length
  if (row + 1 < rowLength) {
    neighbors.push([row + 1, col])
  }

  if (row - 1 >= 0) {
    neighbors.push([row - 1, col])
  }

  if (col + 1 < colLength) {
    neighbors.push([row, col + 1])
  }

  if (col - 1 >= 0) {
    neighbors.push([row, col - 1])
  }

  return neighbors
}

const constructAuxilaryGrid = (grid) => {
  const rowLength = grid.length
  const colLength = grid[0].length
  let auxilaryGrid = []
  for (let row = 0; row < rowLength; row++) {
    auxilaryGrid.push([])
    for (let col = 0; col < colLength; col++) {
      auxilaryGrid[row].push(0)
    }
  }

  return auxilaryGrid
}

console.log(
  numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ])
)
