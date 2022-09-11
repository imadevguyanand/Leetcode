/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const rowLength = obstacleGrid.length
  const colLength = obstacleGrid[0].length

  if (obstacleGrid[0][0] === 1) {
    return 0
  }
  const obstaclePositions = []
  let foundObstacle = false
  // Update first row
  for (let col = 0; col < colLength; col++) {
    let currentValue = obstacleGrid[0][col]
    if (currentValue === 1) {
      foundObstacle = true
    }
    if (foundObstacle) {
      obstacleGrid[0][col] = 0
    } else {
      obstacleGrid[0][col] = 1
    }
  }

  foundObstacle = false

  // Update first col
  for (let row = 1; row < rowLength; row++) {
    let currentValue = obstacleGrid[row][0]
    if (currentValue === 1) {
      foundObstacle = true
    }
    if (foundObstacle) {
      obstacleGrid[row][0] = 0
    } else {
      obstacleGrid[row][0] = 1
    }
  }

  // Update inner row col with 0 if found an obstacle
  for (let row = 1; row < rowLength; row++) {
    for (let col = 1; col < colLength; col++) {
      let currentValue = obstacleGrid[row][col]
      if (currentValue === 1) {
        obstaclePositions[row + "," + col] = true
      }
    }
  }

  // Update inner row col by taking the top and left values
  for (let row = 1; row < rowLength; row++) {
    for (let col = 1; col < colLength; col++) {
      if (row + "," + col in obstaclePositions) {
        obstacleGrid[row][col] = 0
      } else {
        let left = obstacleGrid[row][col - 1]
        let top = obstacleGrid[row - 1][col]
        obstacleGrid[row][col] = left + top
      }
    }
  }

  return obstacleGrid[rowLength - 1][colLength - 1]
}

console.log(uniquePathsWithObstacles([[1], [0]]))
