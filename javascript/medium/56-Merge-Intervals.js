/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  const nonOverlappingIntervals = []
  for (let i = 0; i < intervals.length; i++) {
    if (nonOverlappingIntervals.length === 0) {
      nonOverlappingIntervals.push(intervals[i])
    } else {
      let topOfStack = nonOverlappingIntervals[nonOverlappingIntervals.length - 1]
      let isOverLapping = isIntervalsOverLapping(topOfStack, intervals[i])
      if (isOverLapping) {
        nonOverlappingIntervals.pop()
        nonOverlappingIntervals.push([topOfStack[0], Math.max(intervals[i][1], topOfStack[1])])
      } else {
        nonOverlappingIntervals.push(intervals[i])
      }
    }
  }
  return nonOverlappingIntervals
}

const isIntervalsOverLapping = (arrayOne, arrayTwo) => {
  if (arrayTwo[0] <= arrayOne[1]) {
    return true
  } else {
    return false
  }
}

console.log(
  merge([
    [1, 3],
    [8, 10],
    [2, 6],
    [15, 18],
  ])
)
