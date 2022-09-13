/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  const result = []

  for (let i = 0; i < intervals.length; i++) {
    const startInterval = intervals[i][0]
    const endInterval = intervals[i][1]

    if (newInterval[1] < startInterval) {
      result.push(newInterval)
      return result.concat(intervals.slice(i, intervals.length))
    } else if (newInterval[0] > endInterval) {
      result.push([startInterval, endInterval])
    } else {
      newInterval = [Math.min(startInterval, newInterval[0]), Math.max(endInterval, newInterval[1])]
    }
  }

  result.push(newInterval)
  return result
}

console.log(insert([], [5, 7]))
