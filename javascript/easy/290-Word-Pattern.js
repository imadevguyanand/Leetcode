/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 * @complexties Time => O(n) | Space => O(n)
 * @description HashTable
 */
var wordPattern = function (pattern, s) {
  const hashTable = []
  let stringOfArray = s.split(" ")
  if (stringOfArray.length !== pattern.length) {
    return false
  }

  for (let i = 0; i < pattern.length; i++) {
    if (!(pattern[i] in hashTable)) {
      if (Object.values(hashTable).includes(stringOfArray[i])) {
        return false
      }
      hashTable[pattern[i]] = stringOfArray[i]
    } else {
      if (hashTable[pattern[i]] !== stringOfArray[i]) {
        return false
      }
    }
  }

  return true
}

console.log(wordPattern("abba", "dog dog dog dog"))
