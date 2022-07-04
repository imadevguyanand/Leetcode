/**
 * @param {number[]} number
 * @return {number}
 * @complexities Time => O(n) | Space O(1)
 * @description GCD and Formula => GCD(a,b) = (a * b )/ LCM(a,b)
 */
var findGCD = function (nums) {
  const minMax = getMinMax(nums)
  let greater = minMax[0]
  let smaller = minMax[1]
  while (smaller) {
    let gcd = greater % smaller
    greater = smaller
    smaller = gcd
  }

  return greater
}

const getMinMax = (nums) => {
  let min = Number.MAX_VALUE
  let max = Number.MIN_VALUE
  for (const num of nums) {
    if (num > max) {
      max = num
    }

    if (num < min) {
      min = num
    }
  }
  return [max, min]
}

console.log(findGCD([2, 10]))
