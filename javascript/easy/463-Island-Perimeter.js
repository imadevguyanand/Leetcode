/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  const rowLength = grid.length
  const colLength = grid[0].length
  const visited = constructVisitedGrid(grid)
  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      let currentValue = grid[row][col]
      const alreadyVisited = visited[row][col]
      if (currentValue === 1 && !alreadyVisited) {
        return depthFirstSearch(grid, row, col, visited)
      }
    }
  }
  return 0
}

const depthFirstSearch = (grid, row, col, visited) => {
  const stack = [[row, col]]
  let perimeter = 0
  while (stack.length > 0) {
    const topOfStack = stack.pop()
    const [currentRow, currentCol] = topOfStack
    const alreadyVisited = visited[currentRow][currentCol]
    if (alreadyVisited) {
      continue
    }
    visited[currentRow][currentCol] = true
    perimeter += 4 - getCount(grid, currentRow, currentCol)
    const neigbours = getNeigbours(grid, currentRow, currentCol)
    for (const neigbour of neigbours) {
      const [neigbourRow, neigbourCol] = neigbour
      if (grid[neigbourRow][neigbourCol] === 1) {
        stack.push([neigbourRow, neigbourCol])
      }
    }
  }

  return perimeter
}

const getNeigbours = (grid, row, col) => {
  const rowLength = grid.length
  const colLength = grid[0].length
  const neigbours = []

  // up
  if (row - 1 >= 0) {
    neigbours.push([row - 1, col])
  }

  // left
  if (col - 1 >= 0) {
    neigbours.push([row, col - 1])
  }

  // right
  if (col + 1 < colLength) {
    neigbours.push([row, col + 1])
  }

  // down
  if (row + 1 < rowLength) {
    neigbours.push([row + 1, col])
  }

  return neigbours
}

const getCount = (grid, row, col) => {
  const rowLength = grid.length
  const colLength = grid[0].length
  let count = 0

  // up
  if (row - 1 >= 0 && grid[row - 1][col] === 1) {
    count++
  }

  // left
  if (col - 1 >= 0 && grid[row][col - 1] === 1) {
    count++
  }

  // right
  if (col + 1 < colLength && grid[row][col + 1] === 1) {
    count++
  }

  // down
  if (row + 1 < rowLength && grid[row + 1][col] === 1) {
    count++
  }

  return count
}

const constructVisitedGrid = (grid) => {
  const visited = []
  for (let row = 0; row < grid.length; row++) {
    visited.push([])
    for (let col = 0; col < grid[0].length; col++) {
      visited[row].push(false)
    }
  }
  return visited
}

console.log(
  islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ])
)
