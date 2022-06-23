/**
 * @param {number[]} height
 * @return {number}
 * @complexities Time => O(n) | Space => O(1)
 * @description This is a sliding window problem
 */
var maxArea = function (height) {
  const length = height.length
  let leftPointer = 0
  let rightPointer = length - 1
  let maxArea = Number.MIN_SAFE_INTEGER
  while (leftPointer < rightPointer) {
    let diff = Math.abs(rightPointer - leftPointer)
    let min = Math.min(height[leftPointer], height[rightPointer])
    let currentMaxArea = min * diff
    if (currentMaxArea > maxArea) {
      maxArea = currentMaxArea
    }
    // Adjust the left and right pointer based on the height value
    if (height[leftPointer] > height[rightPointer]) {
      // If left height is greater than right height, then decrement right
      rightPointer--
    } else {
      leftPointer++
    }
  }
  return maxArea
}

console.log(maxArea([1, 1]))
