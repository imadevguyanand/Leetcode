/**
 * @param {number[]} nums
 * @return {boolean}
 * @complexities Time => O(n) | Space => O(n)
 * @description HashTable and Bit manipulation
 */
var divideArray = (nums) => {
  const length = nums.length
  const hashTable = []
  for (let i = 0; i < length; i++) {
    if (!(nums[i] in hashTable)) {
      hashTable[nums[i]] = 1
    } else {
      hashTable[nums[i]] += 1
    }
  }

  for (const [key, value] of Object.entries(hashTable)) {
    if (value % 2 !== 0) {
      return false
    }
  }

  return true
}

console.log(divideArray([3, 2, 3, 2, 2, 2]))
