/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 * @complexities Time => O(a/b) | Space => O(1)
 * @description Math
 */
var divide = function (dividend, divisor) {
  let sign = true
  if (dividend < 0 && divisor < 0) {
    sign = true
  } else if (dividend < 0 || divisor < 0) {
    sign = false
  }
  let count = 0
  dividend = Math.abs(dividend)
  divisor = Math.abs(divisor)
  while (dividend > 0 && dividend >= divisor) {
    count++
    dividend = dividend - divisor
  }

  if (count < -Math.pow(2, 31)) {
    return -Math.pow(2, 31)
  }

  if (count > Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1
  }
  count = sign === true ? count : -count
  return count
}

console.log(divide(100, 10))
