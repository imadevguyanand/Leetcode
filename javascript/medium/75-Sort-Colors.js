/**
 * Solution I
 * @param {number[]} nums
 * @return {void}
 * @complexities Time => O(n) | Space => O(1)
 * @description HashTable
 */
var sortColors = function (nums) {
  const length = nums.length
  const hashTable = []
  for (let i = 0; i < length; i++) {
    let currentNumber = nums[i]
    if (!(currentNumber in hashTable)) {
      hashTable[currentNumber] = 1
    } else {
      hashTable[currentNumber] = hashTable[currentNumber] + 1
    }
  }

  let i = 0
  for (const [index, value] of Object.entries(hashTable)) {
    let count = value
    while (count != 0) {
      nums[i++] = +index
      count--
    }
  }
  return nums
}

/**
 * Solution II - One Pass Algorithm
 * @param {number[]} nums
 * @return {void}
 * @complexities Time => O(n) | Space => O(1)
 * @description Pointer and array manipulation
 */
const sortColors = (nums) => {
  const length = nums.length
  let leftPointer = 0
  let rightPointer = length - 1
  let i = 0
  while (i <= rightPointer) {
    if (nums[i] === 0) {
      swapFunction(nums, i, leftPointer)
      leftPointer++
      i++
    } else if (nums[i] === 2) {
      swapFunction(nums, i, rightPointer)
      rightPointer--
    } else {
      i++
    }
  }
  return nums
}

/**
 *
 * @param {array} array
 * @param {number} firstIdx
 * @param {number} secondIdx
 */
const swapFunction = (array, firstIdx, secondIdx) => {
  let temp = array[secondIdx]
  array[secondIdx] = array[firstIdx]
  array[firstIdx] = temp
}

console.log(sortColors([2, 0, 2, 1, 1, 0]))
