/**
 * @param {string[]} ops
 * @return {number}
 * @Complexities Time => O(n) | Space => O(n)
 * @descripiton Stack operations
 */
var calPoints = function (ops) {
  const length = ops.length
  const stack = []
  for (let i = 0; i < length; i++) {
    let character = ops[i]
    updateScores(character, stack)
  }

  let finalScore = 0
  for (const score of stack) {
    finalScore += score
  }
  return finalScore
}

const updateScores = (specialCharacter, stack) => {
  switch (specialCharacter) {
    // Invalidate the previous score, removing it from the stack
    case "C":
      stack.pop()
      break
    // Calculate a new score that is double the previous score
    case "D":
      let previousScore = stack[stack.length - 1]
      stack.push(2 * previousScore)
      break
    // Record a new score that is the sum of the previous two scores.
    case "+":
      let previousTwoScoreSum = stack[stack.length - 1] + stack[stack.length - 2]
      stack.push(previousTwoScoreSum)
      break
    default:
      stack.push(parseInt(specialCharacter))
  }
}

console.log(calPoints(["5", "2", "C", "D", "+"]))
