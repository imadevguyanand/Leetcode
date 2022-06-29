/**
 * @param {string} s
 * @return {number}
 * @complexities Time => O(n) | Space => O(n)
 * @description HashTable and sliding window
 */
var lengthOfLongestSubstring = function (s) {
  const hashTable = []
  let longestSubstringCount = 0
  let startingIdx = 0
  for (let letterIdx = 0; letterIdx < s.length; letterIdx++) {
    let char = s[letterIdx]
    // If found in hashTable, calculate the starting index
    if (char in hashTable) {
      startingIdx = Math.max(startingIdx, hashTable[char] + 1)
    }
    // Calculate the longest substring and update if the current substring is larger
    let currentLongestString = letterIdx - startingIdx + 1
    if (currentLongestString > longestSubstringCount) {
      longestSubstringCount = currentLongestString
    }
    // Push into the hashTable
    hashTable[char] = letterIdx
  }
  return longestSubstringCount
}

console.log(lengthOfLongestSubstring("abcabcbb"))
