/**
 * @param {number} rowIndex
 * @return {number[]}
 * @complexities O(n^2) | Space => O(n^2)
 * @description Array
 */
var getRow = function (rowIndex) {
  const res = [[1]]
  if (rowIndex === 0) {
    return res[rowIndex]
  }

  for (let i = 0; i < rowIndex; i++) {
    let temp = [...res[res.length - 1]]
    temp.splice(0, 0, 0)
    temp.push(0)
    let innerRow = []
    for (let j = 0; j < res[res.length - 1].length + 1; j++) {
      innerRow.push(temp[j] + temp[j + 1])
    }
    res.push(innerRow)
  }
  return res[res.length - 1]
}

console.log(getRow(2))
