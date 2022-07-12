/**
 * @param {number} n
 * @return {boolean}
 * @complexities Time => O(logn) | Space => O(logn)
 */
var isHappy = function (n, hashtable = []) {
  // Base case
  if (n === 1) {
    return true
  }

  // Convert the integer to string
  let string = n.toString()
  const stringLength = string.length
  let sum = 0
  // Loop through the length of the string
  for (let i = 0; i < stringLength; i++) {
    let num = string[i]
    sum += num * num
  }

  if (!(sum in hashtable)) {
    hashtable[sum] = true
  } else {
    return false
  }

  return isHappy(sum, hashtable)
}

const hashtable = []
console.log(isHappy(9999999999, hashtable))
