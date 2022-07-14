/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * @complexities Time => O(n) | Space => O(1)
 * @description Two Pointers
 */
var isSubsequence = (s, t) => {
  let l = 0
  let r = 0
  const sLength = s.length
  const tLength = t.length
  while (l < sLength && r < tLength) {
    if (s[l] === t[r]) {
      l++
      r++
    } else {
      r++
    }
  }
  if (l < sLength) {
    return false
  }
  return true
}
