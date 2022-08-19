/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const hashTable = []
  for (const number of nums) {
    if (!(number in hashTable)) {
      hashTable[number] = 1
    } else {
      hashTable[number] += 1
    }
  }

  let max = 0
  let majorityElement = null
  for (const [key, value] of Object.entries(hashTable)) {
    if (value > max) {
      max = value
      majorityElement = key
    }
  }
  return majorityElement
}

console.log(majorityElement([3, 2, 3]))
