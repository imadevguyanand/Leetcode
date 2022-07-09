/**
 * @param {string} s
 * @return {number}
 * @complexities Time => O(n) | Space => O(n)
 * @description HashTable and String
 */
var firstUniqChar = function (s) {
  const hashTable = {}
  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    if (!(char in hashTable)) {
      hashTable[char] = 1
    } else {
      hashTable[char] += 1
    }
  }

  for (let j = 0; j < s.length; j++) {
    if (hashTable[s[j]] === 1) return j
  }
  return -1
}

console.log(firstUniqChar("aabb"))
