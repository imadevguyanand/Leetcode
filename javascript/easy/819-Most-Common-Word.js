/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 * @complexities Time => O(n) | Space => O(n)
 * @description HashTable
 */
var mostCommonWord = function (paragraph, banned) {
  const hashTable = []
  // replace the punctuations with spaces, and put all letters in lower case
  let paragraphArray = paragraph
    .toLowerCase()
    .replace(/[^a-z]/gi, " ")
    .split(/[ ,]+/)

  storeInHashTable(hashTable, paragraphArray)

  let max = -1
  let frequent = ""
  for (const [key, value] of Object.entries(hashTable)) {
    if (key != "") {
      if (value > max && !banned.includes(key)) {
        max = value
        frequent = key
      }
    }
  }
  return frequent
}

const storeInHashTable = (hashTable, array) => {
  for (let word of array) {
    if (!(word in hashTable)) {
      hashTable[word] = 1
    } else {
      hashTable[word] += 1
    }
  }
}

console.log(mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"]))
