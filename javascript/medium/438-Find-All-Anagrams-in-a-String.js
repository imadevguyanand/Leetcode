/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 * @complexities Time => O(n) | Space => O(n)
 * @description Sliding window and HashTable
 */
var findAnagrams = function (string, pattern) {
  if (pattern.length > string.length) {
    return []
  }
  let anagrams = []
  const stringHashTable = {}
  const patterHashTable = {}
  for (let i = 0; i < pattern.length; i++) {
    if (!(pattern[i] in patterHashTable)) {
      patterHashTable[pattern[i]] = 1
    } else {
      patterHashTable[pattern[i]] += 1
    }

    if (!(string[i] in stringHashTable)) {
      stringHashTable[string[i]] = 1
    } else {
      stringHashTable[string[i]] += 1
    }
  }

  let isAnagram = compareHashTable(patterHashTable, stringHashTable)
  if (isAnagram) {
    anagrams.push(0)
  }

  let left = 0
  for (let r = pattern.length; r < string.length; r++) {
    if (!(string[r] in stringHashTable)) {
      stringHashTable[string[r]] = 1
    } else {
      stringHashTable[string[r]] += 1
    }
    stringHashTable[string[left]] -= 1
    if (stringHashTable[string[left]] === 0) {
      delete stringHashTable[string[left]]
    }
    left += 1

    isAnagram = compareHashTable(patterHashTable, stringHashTable)
    if (isAnagram) {
      anagrams.push(left)
    }
  }

  return anagrams
}

const compareHashTable = (hashTableOne, hashTableTwo) => {
  let isSame = true
  for (const [key, value] of Object.entries(hashTableOne)) {
    if (!(key in hashTableTwo) || value !== hashTableTwo[key]) {
      isSame = false
      break
    }
  }
  return isSame
}

console.log(findAnagrams("cbaebabacd", "abc"))
