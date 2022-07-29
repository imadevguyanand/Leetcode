/**
 * @param {string[]} strs
 * @return {string}
 * @complexities Time => O(n * m) | Space => O(n), where n is the length of the array and m is the length of the longest string
 */
var longestCommonPrefix = function (strs) {
  const length = strs.length
  const hashTable = { null: [] }
  let i = 0
  const lengthOfFirstWord = strs[0].length
  let firstWord = strs[0]
  let longestCommonPrefix = firstWord
  while (i < lengthOfFirstWord) {
    let character = firstWord[i]
    if (!(character in hashTable)) {
      hashTable[character] = [i]
    } else {
      hashTable[character] = [...hashTable[character], i]
    }
    i++
  }

  for (let i = 1; i < length; i++) {
    let word = strs[i]
    let commonPrefix = ""
    for (let j = 0; j < word.length; j++) {
      let character = word[j]
      if (character in hashTable && hashTable[character].includes(j)) {
        commonPrefix += character
      } else {
        break
      }
    }
    if (commonPrefix.length < longestCommonPrefix.length) {
      longestCommonPrefix = commonPrefix
    }
  }

  return longestCommonPrefix
}

console.log(longestCommonPrefix(["aaa", "aa", "aaa"]))
