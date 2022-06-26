/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
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
    let exists = true
    for (let j = 0; j < words[i].length; j++) {
      if (!(words[i][j] in hashTable)) {
        exists = false
      }
    }
    if (exists === true) {
      consistentStringCount++
    }
  }

  return consistentStringCount
}

console.log(countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]))
