/**
 * @param {number[][]} grid
 * @return {number}
 * @complexities Time => O(n * m) | Space => O(n * m)
 * @description Matrix traversal using DFS
 */
var maxAreaOfIsland = function (grid) {
  const visitedGrid = constructVisitedGrid(grid)
  return getMaxAreaOfIsland(grid, visitedGrid)
}

const getMaxAreaOfIsland = (grid, visitedGrid) => {
  let maxAreaOfIsland = 0
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      // Current position value is 1 and not visited
      if (grid[row][col] === 1 && !visitedGrid[row][col]) {
        const currentMaxArea = depthFirstSearch(grid, row, col, visitedGrid)
        maxAreaOfIsland = Math.max(currentMaxArea, maxAreaOfIsland)
      }
    }
  }

  return maxAreaOfIsland
}

const depthFirstSearch = (grid, row, col, visitedGrid) => {
  let currentMaxArea = 0
  const stack = []
  stack.push([row, col])
  while (stack.length > 0) {
    const topOfStack = stack.pop()
    const [currentRow, currentCol] = topOfStack
    const alreadyVisited = visitedGrid[currentRow][currentCol]
    if (alreadyVisited) {
      continue
    }
    visitedGrid[currentRow][currentCol] = true
    currentMaxArea++
    const neigbours = getNeigbours(grid, currentRow, currentCol)
    for (const neigbour of neigbours) {
      const [neigbourRow, neigbourCol] = neigbour
      if (grid[neigbourRow][neigbourCol] === 1 && !visitedGrid[neigbourRow][neigbourCol]) {
        stack.push([neigbourRow, neigbourCol])
      }
    }
  }

  return currentMaxArea
}

const getNeigbours = (grid, row, col) => {
  const rowLength = grid.length
  const colLength = grid[row].length
  const neigbours = []
  // Down
  if (row + 1 < rowLength) {
    neigbours.push([row + 1, col])
  }

  // Up
  if (row - 1 >= 0) {
    neigbours.push([row - 1, col])
  }

  // Right
  if (col + 1 < colLength) {
    neigbours.push([row, col + 1])
  }

  // Left
  if (col - 1 >= 0) {
    neigbours.push([row, col - 1])
  }

  return neigbours
}

const constructVisitedGrid = (grid) => {
  const rowLength = grid.length
  const visitedGrid = []
  for (let row = 0; row < rowLength; row++) {
    visitedGrid.push([])
    for (let col = 0; col < grid[row].length; col++) {
      visitedGrid[row].push(false)
    }
  }
  return visitedGrid
}

console.log(
  maxAreaOfIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ])
)
