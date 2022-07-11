/**
 * @param {number[]} nums
 * @return {number}
 * @complexities Time => O(n) | Space => O(1)
 * @description Math and wierd logic to . Take the abs value of the current index - 1 and check if its negative. If yes then we found the duplicate
 */
var findDuplicate = function (nums) {
  const length = nums.length
  for (let i = 0; i < length; i++) {
    if (nums[Math.abs(nums[i]) - 1] < 0) {
      return Math.abs(nums[i])
    } else {
      nums[Math.abs(nums[i]) - 1] = -nums[Math.abs(nums[i]) - 1]
    }
  }
}

console.log(findDuplicate([1, 2, 3, 4, 4]))
