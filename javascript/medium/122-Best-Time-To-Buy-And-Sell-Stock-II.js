/**
 * @param {number[]} prices
 * @return {number}
 * @complexities Time => O(n) | Space => O(1)
 * @description This is a sliding window problem
 */
var maxProfit = function (prices) {
  const length = prices.length
  let leftPointer = 0
  let rightPointer = 1
  let maxProfit = 0
  while (leftPointer < length && rightPointer < length) {
    let sellingPrice = prices[rightPointer]
    let buyingPrice = prices[leftPointer]

    if (buyingPrice > sellingPrice) {
      leftPointer = rightPointer
    } else {
      let currentMaxProfit = sellingPrice - buyingPrice
      maxProfit += currentMaxProfit
      leftPointer = rightPointer
    }
    rightPointer++
  }
  return maxProfit
}

console.log(maxProfit([7, 6, 4, 3, 1]))
