/**
 * @param {character[]} s
 * @return {void}
 * @complexities Time => O(n) | Space => O(1)
 * @description Pointers
 */
var reverseString = function (s) {
  let leftPointer = 0
  let rightPointer = s.length - 1
  while (leftPointer < rightPointer) {
    tempFunction(s, leftPointer, rightPointer)
    leftPointer++
    rightPointer--
  }
}

const tempFunction = (array, firstIdx, secondIdx) => {
  let temp = array[secondIdx]
  array[secondIdx] = array[firstIdx]
  array[firstIdx] = temp
}
