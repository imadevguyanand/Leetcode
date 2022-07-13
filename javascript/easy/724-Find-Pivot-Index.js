/**
 * @param {number[]} nums
 * @return {number}
 * @complexities Time => O(n) | Space => O(n)
 * @description Math and Array
 */
var pivotIndex = function (nums) {
  let leftSum = 0
  let rightSum = 0
  let leftArray = []
  let rightArray = []

  for (let i = 0; i < nums.length; i++) {
    leftArray.push(leftSum)
    leftSum += nums[i]
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    rightArray[i] = rightSum
    rightSum += nums[i]
  }

  for (let i = 0; i < nums.length; i++) {
    if (leftArray[i] === rightArray[i]) {
      return i
    }
  }

  return -1
}

/**
 * @param {number[]} nums
 * @return {number}
 * @complexities Time => O(n) | Space => O(1)
 * @description Math and Array - Let's say we knew S as the sum of the numbers, and we are at index i. If we knew the sum of numbers leftsum that are to the left of index i, then the other sum to the right of the index would just be S - nums[i] - leftsum.
 */
var pivotIndex = function (nums) {
  let sum = 0
  let leftsum = 0
  for (const num of nums) {
    sum += num
  }

  for (let i = 0; i < nums.length; i++) {
    if (leftsum == sum - leftsum - nums[i]) {
      return i
    }

    leftsum += nums[i]
  }
  return -1
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6]))
