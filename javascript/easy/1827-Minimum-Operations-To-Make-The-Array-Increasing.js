/**
 * @param {number[]} nums
 * @return {number}
 * @complexities Time => O(n) | Space => 0(1)
 * @description This problem is based on the greedy technique
 */
var minOperations = (nums) => {
  const length = nums.length
  let minOperations = 0
  for (let i = 0; i < length; i++) {
    if (nums[i] >= nums[i + 1]) {
      let diff = nums[i] - nums[i + 1]
      minOperations += diff + 1
      nums[i + 1] = nums[i] + 1
    }
  }
  return minOperations
}

console.log(minOperations([1, 1, 1]))
