/**
 * @param {number[][]} rooms
 * @return {boolean}
 * @complexities Time => O(E + V) | Space => O(E), where E is the number of rooms and V is the total number of keys
 */
var canVisitAllRooms = function (rooms) {
  const visitedRooms = []
  visitedRooms[0] = true
  const stack = [0]
  while (stack.length > 0) {
    const topOfStack = stack.pop()
    const neigbours = rooms[topOfStack]
    for (const neigbour of neigbours) {
      const isAlreadyVisited = visitedRooms[neigbour]
      if (!isAlreadyVisited) {
        visitedRooms[neigbour] = true
        stack.push(neigbour)
      }
    }
  }
  return Object.keys(visitedRooms).length == rooms.length ? true : false
}

console.log(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]]))
