/**
 * @param {number[]} nums
 * @return {boolean}
 * @complexities Time => O(n) | Space => O(n)
 * @description HashTable and Array
 */
var containsDuplicate = function (nums) {
  const hashTable = []
  const length = nums.length
  for (let i = 0; i < length; i++) {
    if (!(nums[i] in hashTable)) {
      hashTable[nums[i]] = true
    } else {
      return true
    }
  }
  return false
}

/**
 * @param {number[]} nums
 * @return {boolean}
 * @complexities Time => O(nlogn) | Space => O(1)
 * @description Bit Manipulation
 */
var containsDuplicate = function (nums) {
  if (nums.length === 1) {
    return false
  }
  nums.sort((a, b) => a - b)
  const length = nums.length
  let current = nums[0]
  for (let i = 1; i < length; i++) {
    let res = nums[i] ^ nums[i - 1]
    if (res === 0) {
      return true
    }
  }
  return false
}
console.log(containsDuplicate([2, 14, 18, 22, 22]))
