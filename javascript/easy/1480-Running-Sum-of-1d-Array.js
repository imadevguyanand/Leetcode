/**
 * @param {number[]} nums
 * @return {number[]}
 * @complexities Time => O(n) | Space => O(n)
 * @description Array
 */
var runningSum = function (nums) {
  let sum = 0
  let result = []
  const length = nums.length
  for (let i = 0; i < length; i++) {
    sum += nums[i]
    result.push(sum)
  }
  return result
}

console.log(runningSum([1, 2, 3, 4]))
