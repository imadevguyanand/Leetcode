/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  const hashTable = {}
  for (const letter of words) {
    if (!(letter in hashTable)) {
      hashTable[letter] = 1
    } else {
      hashTable[letter] += 1
    }
  }

  const sorted = Object.keys(hashTable).sort((a, b) => {
    if (hashTable[b] === hashTable[a]) {
      return a > b ? 1 : -1
    }
    return hashTable[b] - hashTable[a]
  })
  return sorted.slice(0, k)
}
