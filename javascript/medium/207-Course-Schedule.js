/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 * @complexities Time => O(e + v) | Space => O(n), where e is the edges and v is the vertices
 * @descripition HashTable and DFS
 */
var findOrder = function (numCourses, prerequisites) {
  const preMapHashTable = {}
  const order = []
  const visited = []
  for (let i = 0; i < numCourses; i++) {
    preMapHashTable[i] = []
  }

  for (const pre of prerequisites) {
    let course = pre[0]
    let prequisite = pre[1]
    preMapHashTable[course].push(prequisite)
  }

  for (const course in preMapHashTable) {
    const isCyclic = depthFirstSearch(course, visited, preMapHashTable, order)
    if (!isCyclic) {
      return []
    }
  }

  return order
}

const depthFirstSearch = (course, visited, preMapHashTable, order) => {
  if (visited[course]) {
    return false
  }

  if (preMapHashTable[course].length === 0) {
    if (!order.includes(+course)) {
      order.push(+course)
    }
    return true
  }

  visited[course] = true
  for (const neigbour of preMapHashTable[course]) {
    const isCyclic = depthFirstSearch(neigbour, visited, preMapHashTable, order)
    if (!isCyclic) {
      return false
    }
  }

  visited[course] = false
  preMapHashTable[course] = []

  return true
}

console.log(
  findOrder(4, [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ])
)
