/**
 * @param {number[]} nums
 * @return {number[][]}
 * @complexities Time => O(n^2) | Space => O(n)
 * @description Sorting and Two pointer
 */
var threeSum = (nums) => {
  nums.sort((a, b) => a - b)
  const triplets = []
  const hashTable = []
  const length = nums.length
  for (let i = 0; i < length; i++) {
    let leftPointer = i + 1
    let rightPointer = length - 1
    while (leftPointer < rightPointer) {
      let sum = nums[i] + nums[leftPointer] + nums[rightPointer]
      if (sum === 0) {
        let indexPattern = nums[i] + "," + nums[leftPointer] + "," + nums[rightPointer]
        if (!(indexPattern in hashTable)) {
          hashTable[indexPattern] = true
          triplets.push([nums[i], nums[leftPointer], nums[rightPointer]])
        }
        leftPointer++
        rightPointer--
      } else if (sum < 0) {
        leftPointer++
      } else {
        rightPointer--
      }
    }
  }
  return triplets
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
