/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    stones.sort((a, b) => b - a)

    let first = stones.shift()
    let second = stones.shift()

    if (first !== second) {
      stones.push(Math.abs(first - second))
    }
  }

  if (stones.length == 0) {
    return 0
  }

  return stones[0]
}
