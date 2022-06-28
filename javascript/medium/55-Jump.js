/**
 * @param {number[]} nums
 * @return {boolean}
 * @complexities Time => O(n) | Space => O(1)
 * @description Greedy Technique
 */
var canJump = (nums) => {
  let ladder = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (ladder == 0) {
      return false
    }
    ladder--
    let current = nums[i]
    ladder = Math.max(ladder, current)
  }

  return true
}

console.log(canJump([3, 0, 8, 2, 0, 0, 1]))
