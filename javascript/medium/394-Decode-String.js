/**
 * @param {string} s
 * @return {string}
 * @complexities Time => O(n) | Space => O(n)
 * @description Stack and String manipulation
 */
var decodeString = function (s) {
  const stack = []
  for (let i = 0; i < s.length; i++) {
    const ch = s[i]
    if (ch !== "]") {
      stack.push(ch)
    } else {
      let chars = ""
      while (stack[stack.length - 1] !== "[") {
        chars = stack.pop() + chars
      }
      stack.pop()
      let num = ""
      while (stack.length && !isNaN(stack[stack.length - 1])) {
        num = stack.pop() + num
      }
      let substr = ""
      for (let i = 0; i < parseInt(num); i++) {
        substr += chars
      }
      stack.push(substr)
    }
  }

  return stack.join("")
}

console.log(decodeString("3[a]2[bc]"))
console.log(decodeString("3[a2[c]]"))
