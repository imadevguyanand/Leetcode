/**
 * @param {number} n
 * @return {number}
 * @complexities Time => O(n) | Space => O(n)
 * @description Recursion and Memoization
 */
var fib = function (n) {
  return fibRec(n, (memo = []))
}

function fibRec(number, memo) {
  // Base case
  if (number === 0) {
    return 0
  }
  if (number === 1) {
    return 1
  }
  if (number in memo) {
    return memo[number]
  }
  memo[number] = fibRec(number - 1, memo) + fibRec(number - 2, memo)
  return memo[number]
}

console.log(fib(100))
