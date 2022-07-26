/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  flowerbed = [0].concat(flowerbed).concat(0)
  const length = flowerbed.length
  for (let i = 1; i < length - 1; i++) {
    if (flowerbed[i - 1] === 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
      flowerbed[i] = 1
      n -= 1
    }
  }
  return n <= 0
}

console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2))
