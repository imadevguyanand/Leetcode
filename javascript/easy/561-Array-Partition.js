/**
 * @param {number[]} nums
 * @return {number}
 * @complexities Time => O(nlogn) | Space => O(1)
 * @description Array and Sorting
 */
var arrayPairSum = function (nums) {
  nums.sort((a, b) => a - b)
  let sum = 0
  for (let i = 0; i < nums.length; i = i + 2) {
    let j = i + 1
    sum += Math.min(nums[i], nums[j])
  }
  return sum
}
