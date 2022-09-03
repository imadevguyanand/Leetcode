/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 * @complexities Time => O(n * m * 4^s) | Space => O(n * m), where n is the length of the row and m is the length of col and s is the length of the string
 * @description Backtracking using DFS and bruteforce
 */
const exist = function (board, word) {
  const rowLength = board.length
  const colLength = board[0].length
  const visitedPosition = []
  depthFirstSearch = (row, col, i) => {
    if (i === word.length) {
      return true
    }

    const path = row + "," + col

    if (row < 0 || col < 0 || row >= rowLength || col >= colLength || word[i] != board[row][col] || visitedPosition[path]) {
      return false
    }

    visitedPosition[path] = true
    const result = depthFirstSearch(row + 1, col, i + 1) || depthFirstSearch(row - 1, col, i + 1) || depthFirstSearch(row, col + 1, i + 1) || depthFirstSearch(row, col - 1, i + 1)
    visitedPosition[path] = false
    return result
  }
  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      const exists = depthFirstSearch(row, col, 0)
      if (exists) {
        return true
      }
    }
  }
  return false
}

console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED"
  )
)
