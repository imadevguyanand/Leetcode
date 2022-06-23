/**
 * @param {number[]} nums
 * @return {number}
 * @complexities Time => O(n) | Space => O(n)
 * @description Formula or Pattern based problem
 */
var findMiddleIndex = function (nums) {
  let leftSum = 0
  let rightSum = 0
  const leftHashTable = []
  const rightHashTable = []
  const length = nums.length
  for (let i = 0; i < length; i++) {
    leftSum += nums[i]
    leftHashTable[i] = leftSum
  }

  // Loop from the right side of the array and calculate sum and push to hashTable
  for (let i = length - 1; i >= 0; i--) {
    rightSum += nums[i]
    rightHashTable[i] = rightSum
  }

  // Loop from the left side of the array and calculate sum and push to hashTable
  for (let i = 0; i < length; i++) {
    if (leftHashTable[i] === rightHashTable[i]) {
      return i
    }
  }
  return -1
}

console.log(findMiddleIndex([2, 5]))
