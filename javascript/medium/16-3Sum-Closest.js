/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * @complexities Time => O(n^2) | Space => O(1)
 * @description Sorting and Two pointer
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b)
  let closest = 0
  let diff = Number.MAX_VALUE
  const length = nums.length
  for (let idx = 0; idx < length; idx++) {
    let leftPointer = idx + 1
    let rightPointer = length - 1
    while (leftPointer < rightPointer && rightPointer > leftPointer) {
      let threeSum = nums[leftPointer] + nums[rightPointer] + nums[idx]
      let absoluteCurrentDiff = Math.abs(target - threeSum)
      if (absoluteCurrentDiff < diff) {
        diff = absoluteCurrentDiff
        closest = threeSum
      }
      if (threeSum === target) {
        return target
      } else if (threeSum < target) {
        leftPointer++
      } else if (threeSum > target) {
        rightPointer--
      }
    }
  }
  return closest
}

console.log(threeSumClosest([1, 1, 1, 0], -100))
