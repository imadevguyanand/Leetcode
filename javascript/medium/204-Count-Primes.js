/**
 * @param {number} n
 * @return {number}
 * @complexities Time => O(n sqrt(n)) | Space => O(1)
 * @description Math Brute Force
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
    }
  }
  return noOfPrimes
}

/**
 * @param {number} n
 * @return {number}
 * @complexities Time => O(nlog(logn)) | Space => O(n)
 * @description Math and Logic
 */
var countPrimes = function (n) {
  const primes = new Array(n)
  for (let i = 2; i * i < n; i++) {
    for (let j = i; j * i < n; j++) {
      primes[i * j] = true
    }
  }
  let primeCount = 0
  for (let i = 2; i < n; i++) {
    if (!primes[i]) {
      primeCount++
    }
  }
  return primeCount
}

console.log(countPrimes(100))
