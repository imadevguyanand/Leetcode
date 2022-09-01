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

/**
 * @param {number} n
 * @return {number}
 * @complexities Time => O(n) | Space => O(n)
 * @description Bottom up tabulation method
 */
var fib = function (n) {
  // Initialize the tabulation with length + 1
  const tabulation = new Array(n + 1).fill(0)

  // Fill the table with base case values with the return data type
  tabulation[0] = 0
  tabulation[1] = 1

  // Bottom up logic to fill the rest of the table by iterating
  for (let i = 2; i < tabulation.length; i++) {
    tabulation[i] = tabulation[i - 1] + tabulation[i - 2]
  }

  return tabulation[n]
}

console.log(fib(100))
