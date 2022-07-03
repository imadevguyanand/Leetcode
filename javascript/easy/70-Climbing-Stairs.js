/**
 * @param {number} n
 * @return {number}
 * @complexities Time => O(n^2) | Space => O(n)
 * @description Recursion and Memoization
 */
var climbStairs = function (n, HashTable) {
  if (n < 2) {
    return 1
  }
  if (n in HashTable) {
    return HashTable[n]
  }
  let res = climbStairs(n - 1, HashTable) + climbStairs(n - 2, HashTable)
  HashTable[n] = res
  return res
}

/**
 * @param {number} n
 * @return {number}
 * @complexities Time => O(s * m) | Space => O(s), where s is the total number of steps and m is the maxsteps
 * @description Tabulation
 */
var climbStairs = function (n) {
  const table = new Array(n + 1).fill(0)
  table[0] = 1
  table[1] = 1
  for (let i = 2; i <= n; i++) {
    let step = 1
    while (step <= 2 && step <= i) {
      table[i] += table[i - step]
      step++
    }
  }
  return table[n]
}

const HashTable = []
console.log(climbStairs(5, HashTable))
