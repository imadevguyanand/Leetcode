/**
 * @param {number[]} nums
 * @return {number}
 * @complexities Time => O(logn) | Space => O(1)
 * @description Binary Search
 */
var findMin = function (nums) {
  let l = 0
  let r = nums.length - 1
  while (l < r) {
    const m = ~~((l + r) / 2)
    if (nums[m] > nums[r]) {
      l = m + 1
    } else {
      r = m
    }
  }
  return nums[l]
}

console.log(findMin([11, 13, 15, 17]))
console.log(findMin([3, 4, 5, 1, 2]))
console.log(findMin([4, 5, 6, 7, 0, 1, 2]))
