/**
 * Solution One
 * @param {nums[]} nums
 * @param {number} target
 * @return {number[]}
 * @complexities Time => O(n) | Space => O(n)
 */
var twoSum = function (nums, target) {
  const length = nums.length
  const hashTable = []
  for (let idx = 0; idx < length; idx++) {
    let currentNum = nums[idx]
    let compliment = target - currentNum
    if (!(compliment in hashTable)) {
      hashTable[currentNum] = idx
    } else {
      return [hashTable[compliment], idx]
    }
  }
}

/**
 * Solution Two
 * @param {nums[]} nums
 * @param {number} target
 * @returns {number[]}
 * @complexities Time => O(nlogn) | Space => O(n)
 */
var twoSum = function (nums, target) {
  const twoSumIndex = []
  const hashTable = { null: [] }
  const length = nums.length
  // Loop through each value of the array and store the index value in the hashtable
  for (let i = 0; i < length; i++) {
    if (!(nums[i] in hashTable)) {
      hashTable[nums[i]] = [i]
    } else {
      hashTable[nums[i]].push(i)
    }
  }
  // Sort the array in ascending order
  nums.sort((a, b) => a - b)
  let leftPointer = 0
  let rightPointer = length - 1

  // As the array now is sorted, we can move the left and right pointer to find the target
  while (leftPointer < rightPointer) {
    let sum = nums[leftPointer] + nums[rightPointer]
    if (sum === target) {
      // We found the target but we need to get the index before the array was sorted,
      // so pass the nums value to the hashTable and get the original index and remove
      // the obtained index from the hashTable to deal with duplicates
      const hashLengthLeft = hashTable[nums[leftPointer]].length
      twoSumIndex.push(hashTable[nums[leftPointer]][hashLengthLeft - 1])
      hashTable[nums[leftPointer]].splice(hashLengthLeft - 1, 1)

      const hashLengthRight = hashTable[nums[rightPointer]].length
      twoSumIndex.push(hashTable[nums[rightPointer]][hashLengthRight - 1])
      hashTable[nums[rightPointer]].splice(hashLengthRight - 1, 1)

      return twoSumIndex
    } else if (sum > target) {
      rightPointer--
    } else {
      leftPointer++
    }
  }
}

/**
 * Solution Three - This is the naive solution which runs in O(n^2)
 * @param {@nums[]} nums
 * @param {@number} target
 * @returns {number[]}
 * @complexities Time => O(n^2) | Space => O(1)
 */
var twoSum = function (nums, target) {
  const length = nums.length
  // Loop through each value of i
  for (let i = 0; i < length; i++) {
    // Loop through each value of j and add to the i value and check if
    // it sums to the target, If yes then return the i and j value
    for (let j = i + 1; j < length; j++) {
      // Found the target
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}

console.log(twoSum([3, 3], 6))
