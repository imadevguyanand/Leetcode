/**
 * @param {number} rowIndex
 * @return {number[]}
 * @complexities O(n^2) | Space => O(n^2)
 * @description Array
 */
var generate = function (numRows) {
  // Base condition
  const result = [[1]]

  // numRows - 1 because we have already computed the first row
  for (let i = 0; i < numRows - 1; i++) {
    let temp = [...result[result.length - 1]]
    //arr.splice(index, 0, item);
    temp.splice(0, 0, 0) // Insert 0 at the position 0
    temp.push(0) //  Insert 0 at the end of the position
    let row = []
    // Take the last array from the result set to loop through the no of times
    let range = result[result.length - 1].length + 1
    for (let j = 0; j < range; j++) {
      row.push(temp[j] + temp[j + 1])
    }
    result.push(row)
  }
  return result
}

console.log(getRow(50))
