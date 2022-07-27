/**
 * @param {number} x
 * @return {number}
 * @complexities Time => O(logn) | Space => O(1)
 * @description Math
 */
var reverse = function (x) {
  let isNegative = false
  if (x < 0) {
    isNegative = true
    x = Math.abs(x)
  }

  let reversed = 0
  while (x != 0) {
    reversed *= 10
    reversed += x % 10
    x = Math.floor(x / 10)
  }

  if (reversed < -Math.pow(2, 31) || reversed > Math.pow(2, 31) + 1) {
    return 0
  }

  reversed = isNegative === true ? -reversed : reversed

  return reversed
}
