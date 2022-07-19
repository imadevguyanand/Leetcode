/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * @complexities Time => O(n) | Space => O(n)
 * @description Stack
 */
var backspaceCompare = function (s, t) {
  const stackS = []
  const stackT = []
  pushToStack(stackS, s)
  pushToStack(stackT, t)

  if (stackS.length !== stackT.length) {
    return false
  }

  for (let i = 0; i < stackS.length; i++) {
    if (stackS[i] !== stackT[i]) {
      return false
    }
  }
  return true
}

/**
 * @param {array} stack
 * @param {string} string
 * @return {void}
 * @complexities Time => O(n) | Space => O(n)
 */
const pushToStack = (stack, string) => {
  for (let i = 0; i < string.length; i++) {
    let letter = string[i]
    if (letter !== "#") {
      stack.push(letter)
    } else {
      stack.pop()
    }
  }
}
