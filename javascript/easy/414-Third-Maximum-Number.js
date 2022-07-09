/**
 * @param {number[]} nums
 * @return {number}
 * @complexities Time => O(n) | Space => O(1)
 * @description Array manipulation
 */
var thirdMax = function (nums) {
  let threeLargestNumber = [null, null, null]
  for (const num of nums) {
    if (num === threeLargestNumber[0] || num === threeLargestNumber[1] || num === threeLargestNumber[2]) {
      continue
    }
    updateLargestNumber(num, threeLargestNumber)
  }
  if (threeLargestNumber[0] === null) {
    return threeLargestNumber[2]
  } else {
    return threeLargestNumber[0]
  }
}

const updateLargestNumber = (num, threeLargestNumber) => {
  let firstLargestNumber = threeLargestNumber[2]
  let secondLargestNumber = threeLargestNumber[1]
  let thirdLargestNumber = threeLargestNumber[0]
  if (firstLargestNumber === null || num > firstLargestNumber) {
    shiftAndUpdateLargest(num, threeLargestNumber, 2)
  } else if (secondLargestNumber === null || num > secondLargestNumber) {
    shiftAndUpdateLargest(num, threeLargestNumber, 1)
  } else if (thirdLargestNumber === null || num > thirdLargestNumber) {
    shiftAndUpdateLargest(num, threeLargestNumber, 0)
  }
}

const shiftAndUpdateLargest = (num, threeLargestNumber, index) => {
  for (let i = 0; i <= index; i++) {
    if (i === index) {
      threeLargestNumber[i] = num
    } else {
      threeLargestNumber[i] = threeLargestNumber[i + 1]
    }
  }
}

console.log(thirdMax([1, 2, 3]))
