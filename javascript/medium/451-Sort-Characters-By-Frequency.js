/**
 * @param {string} s
 * @return {string}
 * @complexities Time => O(n * m), where n is the length of the string and m is the maximum repeating count of a letter
 * @description HashTable and Sorting
 */
var frequencySort = function (s) {
  const hashTable = {}
  let result = []
  for (let i = 0; i < s.length; i++) {
    if (!(s[i] in hashTable)) {
      hashTable[s[i]] = 1
    } else {
      hashTable[s[i]] += 1
    }
  }

  let sortedString = Object.keys(hashTable).sort(function (a, b) {
    return hashTable[b] - hashTable[a]
  })

  let idx = 0
  for (const string of sortedString) {
    let value = hashTable[string]
    while (value != 0) {
      result[idx] = string
      value--
      idx++
    }
  }

  return result.join("")
}

console.log(frequencySort("raaeaedere"))
