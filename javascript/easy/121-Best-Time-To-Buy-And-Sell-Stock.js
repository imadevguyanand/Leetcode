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
    let currentMaxProfit = sellingPrice - buyingPrice
    if (currentMaxProfit > maxProfit) {
      maxProfit = currentMaxProfit
    }
    if (buyingPrice > sellingPrice) {
      leftPointer = rightPointer
    }
    rightPointer++
  }
  return maxProfit
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
