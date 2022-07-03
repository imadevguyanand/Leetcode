/**
 * @param {string} string
 * @return {string}
 * @complexities Time => O(n^2) | Space => O(n)
 * @description Strings
 */
var longestPalindrome = function (string) {
  // JS splice gets the string exclusive of the last value
  let longestPalindrome = [0, 1]
  const length = string.length
  for (let idx = 1; idx < length; idx++) {
    const evenLengthPalindrome = getPalindromicSubstring(string, idx - 1, idx)
    const oddLengthPalindrome = getPalindromicSubstring(string, idx - 1, idx + 1)
    const currentLongestPalindrome =
      evenLengthPalindrome[1] - evenLengthPalindrome[0] > oddLengthPalindrome[1] - oddLengthPalindrome[0] ? evenLengthPalindrome : oddLengthPalindrome
    longestPalindrome = currentLongestPalindrome[1] - currentLongestPalindrome[0] > longestPalindrome[1] - longestPalindrome[0] ? currentLongestPalindrome : longestPalindrome
  }

  return string.slice(longestPalindrome[0], longestPalindrome[1])
}

const getPalindromicSubstring = (string, leftIdx, rightIdx) => {
  while (leftIdx >= 0 && rightIdx < string.length) {
    if (string[leftIdx] !== string[rightIdx]) {
      break
    }
    leftIdx--
    rightIdx++
  }
  return [leftIdx + 1, rightIdx]
}

console.log(longestPalindrome("abaxyzzyxf"))
