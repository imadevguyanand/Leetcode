/**
 * @param {number[]} nums
 * @return {number}
 * @complexities Time => O(n) | Space => O(n), where n is the length of nums
 * @description HashTable
 */
var longestConsecutive = function (nums) {
  let longest = 0
  const hashTable = {}

  for (const number of nums) {
    if (!(number in hashTable)) {
      hashTable[number] = true
    }
  }

  for (const number of nums) {
    if (!(number - 1 in hashTable)) {
      let length = 0
      while (number + length in hashTable) {
        length++
      }
      longest = Math.max(length, longest)
    }
  }
  return longest
}

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]))
