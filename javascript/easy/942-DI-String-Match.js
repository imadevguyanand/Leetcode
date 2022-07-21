/**
 * @param {string} s
 * @return {number[]}
 * @complexities Time => O(n) | Space => O(n)
 * @description Array
 */
var diStringMatch = function (s) {
  let result = []
  const array = []
  for (let i = 0; i < s.length + 1; i++) {
    array.push(i)
  }

  let leftPointer = 0
  let rightPointer = array.length - 1
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "I") {
      result.push(array[leftPointer])
      leftPointer++
    } else {
      result.push(array[rightPointer])
      rightPointer--
    }
  }

  result.push(array[leftPointer])
  return result
}

console.log(diStringMatch("IDID"))
