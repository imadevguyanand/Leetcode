/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const preMap = {}
  const visited = []
  for (let i = 0; i < numCourses; i++) {
    preMap[i] = []
  }

  for (const value of prerequisites) {
    const course = value[0]
    const prerequisite = value[1]
    preMap[course].push(prerequisite)
  }

  for (let course = 0; course < numCourses; course++) {
    const canfinish = DFS(course, preMap, visited)
    if (!canfinish) {
      return false
    }
  }
  return true
}

const DFS = (course, preMap, visited) => {
  if (visited[course]) {
    return false
  }
  if (preMap[course].length === 0) {
    return true
  }

  visited[course] = true
  for (const neighbor of preMap[course]) {
    const canFinish = DFS(neighbor, preMap, visited)
    if (!canFinish) {
      return false
    }
  }

  visited[course] = false
  preMap[course] = []
  return true
}

console.log(
  canFinish(5, [
    [0, 1],
    [0, 2],
    [1, 3],
    [1, 4],
    [3, 4],
  ])
)
