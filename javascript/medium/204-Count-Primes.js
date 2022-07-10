/**
 * @param {number} n
 * @return {number}
 * @complexities Time => O(n^2) | Space => O(1)
 * @description Math
 */
var countPrimes = function (n) {
  if (n <= 2) {
    return 0
  }
  let noOfPrimes = 1
  for (let number = 3; number < n; number++) {
    let divider = 2
    let prime = true
    while (number > divider && number < n) {
      if (number % divider === 0) {
        prime = false
        break
      }
      divider++
    }
    if (prime) {
      noOfPrimes++
      console.log(number)
    }
  }
  return noOfPrimes
}

/**
 * @param {number} n
 * @return {number}
 * @complexities Time => O(n) | Space => O(1)
 * @description Math
 */
var countPrimes = function (n) {
  if (n <= 2) {
    return 0
  }
  const primes = new Array(n)
  for (let i = 2; i * i < n; i++) {
    if (!primes[i]) {
      for (let j = i; j * i < primes.length; j++) {
        primes[i * j] = true
      }
    }
  }
  let noOfPrimes = 0
  for (let i = 2; i < primes.length; i++) {
    if (!primes[i]) {
      noOfPrimes++
    }
  }
  return noOfPrimes
}

console.log(countPrimes(100))
