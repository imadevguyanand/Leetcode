/**
 * @param {number} x
 * @return {boolean}
 * @complexities Time => O(n) | Space => O(1)
 * @description Pointers
 */
var isPalindrome = function (x) {
  let Xstring = x.toString()
  let leftPointer = 0
  let rightPointer = Xstring.length - 1
  while (leftPointer < rightPointer) {
    if (Xstring[leftPointer] !== Xstring[rightPointer]) {
      return false
    }
    leftPointer++
    rightPointer--
  }
  return true
}

console.log(isPalindrome(-121))
