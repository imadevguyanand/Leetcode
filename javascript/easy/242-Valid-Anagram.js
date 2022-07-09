/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * @complexities Time => O(n) | Space => O(n)
 * @description HashTable
 */
var isAnagram = function (s, t) {
  // If the string length doesn't match then its not an anagram
  if (s.length() !== t.length()) {
    return false
  }

  const hashTable = []
  // Loop through the first string and store the count of the letter in the hashtable
  for (let i = 0; i < s.length; i++) {
    if (!(s[i] in hashTable)) {
      hashTable[s[i]] = 1
    } else {
      hashTable[s[i]] += 1
    }
  }

  // Loop through the second string and check if the letter exists and decrement the count
  for (let i = 0; i < t.length; i++) {
    if (!(t[i] in hashTable)) {
      return false
    } else {
      if (hashTable[t[i]] - 1 < 0) {
        return false
      }
      hashTable[t[i]] -= 1
    }
  }

  for (const value of Object.entries(hashTable)) {
    if (value !== 0) {
      return false
    }
  }
  return true
}

console.log(isAnagram("rat", "cat"))
