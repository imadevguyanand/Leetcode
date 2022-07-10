/**
 * @param {number[]} nums
 * @return {number}
 * @complexities Time  => O(n) | Space => O(1)
 * @description Kadane's algorithm
 */
var maxSubArray = function (nums) {
  let max = nums[0]
  let maxSoFar = nums[0]
  for (let i = 1; i < nums.length; i++) {
    max = Math.max(nums[i] + max, nums[i])
    maxSoFar = Math.max(max, maxSoFar)
  }
  return maxSoFar
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
