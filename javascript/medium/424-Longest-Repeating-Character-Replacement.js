/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let result = 0
  const hashTable = {}
  let leftPointer = 0
  for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
    const letter = s[rightPointer]
    if (letter in hashTable) {
      hashTable[letter] += 1
    } else {
      hashTable[letter] = 1
    }

    while (rightPointer - leftPointer + 1 - highestFrequency(hashTable) > k) {
      hashTable[s[leftPointer]] -= 1
      leftPointer++
    }

    result = Math.max(result, rightPointer - leftPointer + 1)
  }
  return result
}

const highestFrequency = (hashTable) => {
  return Math.max(...Object.values(hashTable))
}

//console.log(characterReplacement("ABAB", 2))
console.log(characterReplacement("AABABBA", 1))
