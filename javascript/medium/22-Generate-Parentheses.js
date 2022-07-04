/**
 * @param {number} n
 * @return {string[]}
 * @complexities Time => O((2n)!/((n!((n + 1)!)))) | Space => O((2n)!/((n!((n + 1)!))))
 * @description Recursion
 */
var generateParenthesis = function (n) {
  let result = []
  generateParenthesisHelper(n, n, "", result)
  return result
}

const generateParenthesisHelper = (numberOfOpeningTags, numberOfClosingTags, prefix, result) => {
  if (numberOfOpeningTags > 0) {
    const newPrefix = prefix + "("
    generateParenthesisHelper(numberOfOpeningTags - 1, numberOfClosingTags, newPrefix, result)
  }

  if (numberOfClosingTags > numberOfOpeningTags) {
    const newPrefix = prefix + ")"
    generateParenthesisHelper(numberOfOpeningTags, numberOfClosingTags - 1, newPrefix, result)
  }

  if (numberOfClosingTags === 0) {
    result.push(prefix)
  }
}

console.log(generateParenthesis(3))
