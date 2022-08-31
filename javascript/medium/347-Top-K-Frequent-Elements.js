/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * @complexities Time => O(nlogn) | Space => O(n)
 * @description HashTable and Sorting
 */
var topKFrequent = function (nums, k) {
  const hashTable = {}
  const result = []
  const manipulatedArray = []
  for (const value of nums) {
    if (!(value in hashTable)) {
      hashTable[value] = 1
    } else {
      hashTable[value] += 1
    }
  }

  for (const [key, value] of Object.entries(hashTable)) {
    manipulatedArray.push([+key, value])
  }

  manipulatedArray.sort((a, b) => b[1] - a[1])
  for (let i = 0; i < k; i++) {
    result.push(manipulatedArray[i][0])
  }
  return result
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * @complexities Time => O(n) | Space => O(n)
 * @description HashTable
 */
var topKFrequent = function (nums, k) {
  const hashTable = {}
  const count = []
  const result = []
  for (const value of nums) {
    if (!(value in hashTable)) {
      hashTable[value] = 1
    } else {
      hashTable[value] += 1
    }
  }

  for (let i = 0; i < nums.length + 1; i++) {
    count[i] = []
  }

  for (const [key, value] of Object.entries(hashTable)) {
    count[value].push(key)
  }

  for (let i = count.length - 1; i >= 0; i--) {
    for (const n of count[i]) {
      result.push(n)
      if (result.length === k) {
        return result
      }
    }
  }

  return result
}

console.log(topKFrequent([1], 1))
