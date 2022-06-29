/**
 * @param {string}
 * @return {boolean}
 * @complexities Time => O(n) | Space => O(n)
 * @description Stacks and HashTable
 */
var isValid = function (s) {
  if (s.length <= 1) {
    return false
  }

  let stack = []
  let hashTable = {
    "(": ")",
    "[": "]",
    "{": "}",
  }

  for (let i = 0; i < s.length; i++) {
    let bracket = s[i]
    // If the bracket exists in hashTable, then push the hash value onto the stack
    if (bracket in hashTable) {
      stack.push(hashTable[bracket])
      // If the bracket is not matching with the top of the stack then its not a valid parentheses
    } else if (bracket !== stack.pop()) {
      return false
    }
  }
  let result = stack.length > 0 ? false : true
  return result
}

console.log(isValid("()"))
