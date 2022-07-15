/**
 * @param {string} s
 * @return {number}
 * @complexities Time => O(n) | Space => O(1) where n is the length of s.
 * We need to count each letter. The space for our count, as the alphabet size of s is fixed
 * @description HashTable
 */
var longestPalindrome = function (s) {
  const hashTable = []
  let oddFound = false
  let longestPalindromeCount = 0
  for (const letter of s) {
    if (!(letter in hashTable)) {
      hashTable[letter] = 1
    } else {
      hashTable[letter] += 1
    }
  }

  for (const frequency of Object.values(hashTable)) {
    // Even
    if (frequency % 2 === 0) {
      longestPalindromeCount += frequency
    } // Odd
    else {
      oddFound = true
      longestPalindromeCount += frequency - 1
    }
  }

  return oddFound === true ? longestPalindromeCount + 1 : longestPalindromeCount
}

console.log(longestPalindrome("bb"))
