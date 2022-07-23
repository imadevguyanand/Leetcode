/**
 * @param {string} s
 * @return {number}
 * @complexties Time => O(n) | Space => O(1)
 */
var lengthOfLastWord = function (s) {
  s = s.trim()
  var arr = s.split(" ")
  return arr[arr.length - 1].length
}

/**
 * @param {string} s
 * @return {number}
 * @complexties Time => O(n) | Space => O(1)
 */
var lengthOfLastWord = function (s) {
  s = s.trim()
  let i = s.length
  let count = 0
  while (i >= 0) {
    if (s[i] !== " ") {
      count++
    } else {
      return count - 1
    }
    i--
  }
  return count - 1
}
