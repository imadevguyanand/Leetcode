/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 * @Complexities Time => O(n) | Space => O(1)
 * @description Greedy Technique
 */
var canCompleteCircuit = function (gas, cost) {
  // If the total available gas is less than the total cost then its not possible to complete the circuit
  if (getArraySum(gas) < getArraySum(cost)) {
    return -1
  }

  let validStartingIndex = 0
  let min = 0
  let total = 0
  const length = gas.length
  for (let i = 1; i < length; i++) {
    let gasRequired = cost[i - 1]
    let gasAvailable = gas[i - 1]
    total = total + (gasAvailable - gasRequired)
    // Find the minimum negative value and update the validStartingIndex
    if (total < min) {
      validStartingIndex = i
      min = total
    }
  }

  return validStartingIndex
}

/**
 *
 * @param {array[]} array
 * @return {number}
 * @Complexities Time => O(n) | Space => O(1)
 */
const getArraySum = (array) => {
  let sum = 0
  for (const number of array) {
    sum += number
  }
  return sum
}

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]))
