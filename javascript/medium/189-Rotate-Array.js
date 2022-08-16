/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const length = nums.length
  let leftPointer = 0
  let rightPointer = length - 1
  k = k % length
  reverseArray(nums, leftPointer, rightPointer)
  rightPointer = k - 1
  reverseArray(nums, leftPointer, rightPointer)
  leftPointer = k
  rightPointer = length - 1
  reverseArray(nums, leftPointer, rightPointer)
  return nums
}

const reverseArray = (nums, leftPointer, rightPointer) => {
  while (leftPointer < rightPointer) {
    swapFunc(nums, leftPointer, rightPointer)
    leftPointer++
    rightPointer--
  }
  return nums
}

const swapFunc = (nums, firstIdx, secondIdx) => {
  let temp = nums[secondIdx]
  nums[secondIdx] = nums[firstIdx]
  nums[firstIdx] = temp
}

console.log(rotate([-1], 2))
