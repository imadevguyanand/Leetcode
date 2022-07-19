/**
 *
 * @param {*} secret
 * @param {*} guess
 * @return {string}
 * @complexities Time => O(n) | Space => O(n)
 * @description HashTable
 */
var getHint = function (secret, guess) {
  let bull = 0
  let cow = 0
  let bullIndices = []

  // Bull calculation
  for (let idx = 0; idx < secret.length; idx++) {
    if (secret[idx] === guess[idx]) {
      bull++
      bullIndices.push(idx)
    }
  }

  const HashTable = {}

  for (let idx = 0; idx < secret.length; idx++) {
    if (!bullIndices.includes(idx)) {
      if (secret[idx] in HashTable) {
        HashTable[secret[idx]]++
      } else {
        HashTable[secret[idx]] = 1
      }
    }
  }

  // Cow calculation
  for (let idx = 0; idx < guess.length; idx++) {
    if (!bullIndices.includes(idx)) {
      if (guess[idx] in HashTable && HashTable[guess[idx]] > 0) {
        cow++
        HashTable[guess[idx]]--
      }
    }
  }
  return `${bull}A${cow}B`
}

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 * @complexities Time => O(n) | Space => O(n)
 * @description HashTable
 */
var getHint = function (secret, guess) {
  let bull = 0
  let cow = 0
  const map = {}
  for (let i = 0; i < secret.length; i++) {
    const s = +secret[i] // Converting to Integer
    const g = +guess[i] // Converting to Integer
    if (s === g) {
      bull++
    } else {
      if (map[s] < 0) {
        cow++
      }
      if (map[g] > 0) {
        cow++
      }
      map[s] = map[s] ? map[s] + 1 : 1
      map[g] = map[g] ? map[g] - 1 : -1
    }
  }
  return `${bull}A${cow}B`
}

console.log(getHint("1123", "0111"))
