/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * @complexities Time => O(logn) | Space O(1)
 */
var searchInsert = function (nums, target) {
  const length = nums.length
  let low = 0
  let high = length - 1
  while (low <= high) {
    let mid = Math.floor((low + high) / 2)
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] > target) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  return low
}

console.log(searchInsert([1, 3, 5, 6], 5))
