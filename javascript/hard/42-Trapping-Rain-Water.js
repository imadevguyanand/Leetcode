/**
 *
 * @param {*} heights
 * @returns Integer
 * @complexities Time => O(n) | Space => O(n), where n is the length of the heights array
 * @description Two Pointers and HashTable
 */
function waterArea(heights) {
  let surfaceAreaOfTrappedWater = 0
  let startPosition = 0
  let endPosition = heights.length - 1
  const maxLeftRightHashTable = {}
  constructMaxLeftHashTable(maxLeftRightHashTable, heights)
  constructMaxRightHashTable(maxLeftRightHashTable, heights)

  while (heights[startPosition] === 0) {
    startPosition++
  }

  while (heights[endPosition] === 0) {
    endPosition--
  }

  for (let idx = startPosition; idx < endPosition; idx++) {
    let currentValue = heights[idx]
    let leftMax = maxLeftRightHashTable[idx][0]
    let rightMax = maxLeftRightHashTable[idx][1]
    if (Math.min(leftMax, rightMax) > currentValue) {
      surfaceAreaOfTrappedWater += Math.min(leftMax, rightMax) - currentValue
    }
  }

  return surfaceAreaOfTrappedWater
}

const constructMaxLeftHashTable = (maxLeftRightHashTable, heights) => {
  const length = heights.length
  let maxSoFar = 0
  maxLeftRightHashTable[0] = [maxSoFar]
  for (let idx = 1; idx < length; idx++) {
    let value = heights[idx - 1]
    if (value > maxSoFar) {
      maxSoFar = value
    }

    maxLeftRightHashTable[idx] = [maxSoFar]
  }

  return maxLeftRightHashTable
}

const constructMaxRightHashTable = (maxLeftRightHashTable, heights) => {
  const length = heights.length
  let maxSoFar = 0
  maxLeftRightHashTable[length - 1].push(0)
  for (let idx = length - 2; idx >= 0; idx--) {
    let value = heights[idx + 1]
    if (value > maxSoFar) {
      maxSoFar = value
    }

    maxLeftRightHashTable[idx].push(maxSoFar)
  }

  return maxLeftRightHashTable
}

console.log(waterArea([2, 0, 0, 5]))
