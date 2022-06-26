/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 * @complexities Time => O(n^2) | Space => O(n)
 * @description HashTable and Bit manipulation
 */
const countConsistentStrings = (allowed, words) => {
  const hashTable = []
  const allowedLength = allowed.length
  const wordsLength = words.length
  let consistentStringCount = 0
  for (let i = 0; i < allowedLength; i++) {
    hashTable[allowed[i]] = true
  }
  for (let i = 0; i < wordsLength; i++) {
    let charExists = true
    const wordLength = words[i].length
    for (let j = 0; j < wordLength; j++) {
      let char = words[i][j]
      if (!(char in hashTable)) {
        charExists = false
      }
    }
    if (charExists === true) {
      consistentStringCount++
    }
  }

  return consistentStringCount
}

console.log(countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]))
