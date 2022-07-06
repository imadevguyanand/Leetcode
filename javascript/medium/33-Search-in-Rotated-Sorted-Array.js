/**
 * @param {number[]} array
 * @param {number} target
 * @return {number}
 * @complexities Time => O(logn) | Space => O(1)
 * @description Binary Search
 */
var search = function (array, target) {
  const length = array.length
  let low = 0
  let high = length - 1
  while (low <= high) {
    let middle = Math.floor((low + high) / 2)
    let potentialMatch = array[middle]
    let leftNum = array[low]
    let righNum = array[high]
    if (potentialMatch === target) {
      return middle
    } else if (leftNum <= potentialMatch) {
      // Search left side
      if (target >= leftNum && target < potentialMatch) {
        high = middle - 1
      }
      // Search right side
      else {
        low = middle + 1
      }
    } else {
      if (target <= righNum && target > potentialMatch) {
        low = middle + 1
      } else {
        high = middle - 1
      }
    }
  }
  return -1
}
