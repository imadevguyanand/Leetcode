/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 * @complexities Time => O(nlogn) | Space => O(1)
 * @Description Sorting
 */
var minMovesToSeat = function (seats, students) {
  seats.sort((a, b) => a - b)
  students.sort((a, b) => a - b)
  const length = seats.length
  let minMoves = 0
  for (let i = 0; i < length; i++) {
    let absoluteDiff = Math.abs(students[i] - seats[i])
    minMoves += absoluteDiff
  }
  return minMoves
}

console.log(minMovesToSeat([3, 1, 5], [2, 7, 4]))
