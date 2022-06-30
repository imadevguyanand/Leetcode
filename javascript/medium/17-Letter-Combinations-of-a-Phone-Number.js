const hashTable = {
  1: ["1"],
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
  0: ["0"],
}

/**
 * @param {string} digits
 * @return {string[]}
 * @complexities Time => O(4^n * n) | Space => O(4^n * n)
 * @description Recursion and HashTable
 */
var letterCombinations = function (digits) {
  if (digits === "") {
    return []
  }
  const combinations = []
  const currentCombinations = new Array(digits.length).fill("0")
  letterCombinationsHelper(0, digits, currentCombinations, combinations)
  return combinations
}

const letterCombinationsHelper = (idx, digits, currentCombinations, combinations) => {
  if (idx === digits.length) {
    const mnemonic = currentCombinations.join("")
    combinations.push(mnemonic)
    return combinations
  }
  let digit = digits[idx]
  let letters = hashTable[digit]
  for (const letter of letters) {
    currentCombinations[idx] = letter
    letterCombinationsHelper(idx + 1, digits, currentCombinations, combinations)
  }
}

console.log(letterCombinations(""))
