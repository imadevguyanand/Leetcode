/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * @complexities Time => O(n^2) | Space => O(1)
 * @description Array Looping
 */
var countPairs = function (nums, k) {
  let count = 0
  const length = nums.length
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (nums[i] === nums[j] && (i * j) % k === 0) {
        count++
      }
    }
  }

  return count
}

console.log(countPairs([3, 1, 2, 2, 2, 1, 3], 2))
