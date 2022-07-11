/**
 * @param {number[]} nums
 * @return {number[]}
 * @complexities Time => O(n) | Space => O(n)
 * @description HashTable
 */
var findErrorNums = function (nums) {
  const length = nums.length
  let results = []
  const hashTable = []
  for (let i = 0; i < length; i++) {
    let currentNum = nums[i]
    if (currentNum in hashTable) {
      results.push(currentNum)
    } else {
      hashTable[currentNum] = 1
    }
  }

  let i = 1
  while (i <= length + 1) {
    if (!(i in hashTable)) {
      results.push(i)
      return results
    }
    i++
  }

  return results
}

console.log(findErrorNums([3, 2, 2]))
