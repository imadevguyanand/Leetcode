/**
 *
 * @param {String} stringOne
 * @param {String} stringTwo
 * @return {String}
 * @complexities Time => O(n) | Space => O(1)
 * @description String
 */
function mergeAlternately(stringOne, stringTwo) {
  let mergedString = ""
  const stringOneLength = stringOne.length
  const stringTwoLength = stringTwo.length
  for (let i = 0; i < stringOneLength || i < stringTwoLength; i++) {
    if (i < stringOneLength) {
      mergedString += stringOne[i]
    }
    if (i < stringTwoLength) {
      mergedString += stringTwo[i]
    }
  }

  return mergedString
}

console.log(mergeAlternately("abcd", "efghi"))
