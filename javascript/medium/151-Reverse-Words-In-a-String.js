/**
 * @param {string} string
 * @return {string}
 * @complexities Time => O(n) | Space => O(n)
 * @description HashTable and String manipulation
 */
var reverseWords = function (string) {
  let reversedString = ""
  const hashTable = []
  let word = ""
  let count = 0
  for (letter of string) {
    // If the letter is not empty, concatinate as a word
    if (letter !== " ") {
      word += letter
    } else {
      // If the word is not empty, then push to hashTable
      if (word !== "") {
        hashTable[count] = word
        count++
      }
      word = ""
      // If the letter is empty and the previous hashTable value is not empty then push empty value
      if (hashTable[count - 1] !== " ") {
        hashTable[count] = " "
        count++
      }
    }
  }
  hashTable[count] = word
  for (let i = hashTable.length - 1; i >= 0; i--) {
    reversedString += hashTable[i]
  }
  // Remove trailing and ending whitespaces from the string
  return reversedString.trim()
}

console.log(reverseWords("the sky is  blue"))
