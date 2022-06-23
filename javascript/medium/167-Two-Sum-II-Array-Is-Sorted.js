/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 * @complexities Time => O(n) | Space => O(1)
 * @description This is sliding window problem
 */
var twoSum = function (numbers, target) {
  const length = numbers.length
  let leftPointer = 0
  let rightPointer = length - 1
  while (leftPointer < rightPointer) {
    let sum = numbers[leftPointer] + numbers[rightPointer]
    if (sum > target) {
      rightPointer--
    } else if (sum < target) {
      leftPointer++
    } else {
      return [++leftPointer, ++rightPointer]
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9))
