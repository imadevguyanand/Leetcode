/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @complexities Time => O(logn) | Space => O(1)
 * @description Binary search
 */
var searchRange = function (nums, target) {
  const length = nums.length
  let low = 0
  let high = length - 1
  let result = [-1, -1]
  while (low <= high) {
    let mid = Math.floor((low + high) / 2)
    if (nums[mid] === target) {
      let leftPointer = mid - 1
      let rightPointer = mid + 1
      while (nums[leftPointer] === target && leftPointer >= 0) {
        leftPointer--
      }
      while (nums[rightPointer] === target && rightPointer < length) {
        rightPointer++
      }
      result = [leftPointer + 1, rightPointer - 1]
      return result
    } else if (nums[mid] > target) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  return result
}

console.log(searchForRange([5, 7, 7, 8, 8, 10], 8))
