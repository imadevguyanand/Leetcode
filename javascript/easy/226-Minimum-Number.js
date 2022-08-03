/**
 * @param {number[]} nums
 * @return {number}
 * @complexities Time => O(n) | Space => O(n)
 * @description HashTable
 */
var missingNumber = function (nums) {
  const hashTable = []
  for (let i = 0; i < nums.length; i++) {
    hashTable[nums[i]] = true
  }

  for (let i = 0; i <= hashTable.length; i++) {
    if (!(i in hashTable)) {
      return i
    }
  }
}

console.log(missingNumber([0, 1]))
