/**
 * @param {character[][]} board
 * @return {boolean}
 * @complexities Time => O(1) | Space => O(1)
 * @description HashTable and 2D array traversal
 */
var isValidSudoku = function (board) {
  const hashTable = []
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let currentValue = board[i][j]
      if (currentValue !== ".") {
        let col = currentValue + " found in col " + j
        let row = currentValue + " found in row " + i
        let subBox = currentValue + " found in subbox " + parseInt(i / 3) + "-" + parseInt(j / 3)
        if (!(col in hashTable) && !(row in hashTable) && !(subBox in hashTable)) {
          hashTable[col] = true
          hashTable[row] = true
          hashTable[subBox] = true
        } else {
          return false
        }
      }
    }
  }

  return true
}

const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]

console.log(isValidSudoku(board))
