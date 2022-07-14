/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * @complexities Time => O(n) | Space => O(n), Where n is the length of the input strings
 * @description HashTable and Strings
 */
var isIsomorphic = function (s, t) {
  const hashTable = []
  const sLength = s.length
  const tLength = t.length
  if (sLength !== tLength) {
    return false
  }

  for (let i = 0; i < sLength; i++) {
    let sLetter = s[i]
    let tLetter = t[i]
    if (!(sLetter in hashTable)) {
      if (Object.values(hashTable).includes(tLetter)) {
        return false
      }
      hashTable[sLetter] = tLetter
    } else if (hashTable[sLetter] !== tLetter) {
      return false
    }
  }
  return true
}

console.log(isIsomorphic("badc", "baba"))
