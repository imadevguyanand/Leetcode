const NumberOfConnectedGraph = (n, edges) => {
  let graph = {}
  const visited = []
  let count = 0
  for (let vertex = 0; vertex < n; vertex++) {
    graph[vertex] = []
  }

  for (const g of edges) {
    const vertex = g[0]
    const edge = g[1]
    graph[vertex].push(edge)
  }

  function explore(graph, current, visited) {
    if (visited[current]) {
      return false
    }

    visited[current] = true

    for (let neighbor of graph[current]) {
      explore(graph, neighbor, visited)
    }
    return true
  }

  for (let node in graph) {
    if (explore(graph, node, visited)) {
      count += 1
    }
  }
  return count
}

const depthFirstSearch = (vertex, visited, count, hashTable) => {
  if (hashTable[vertex].length === 0) {
    return
  }

  visited[vertex] = true
  for (const v of hashTable[vertex]) {
    depthFirstSearch(v, visited, count, hashTable)
  }

  return count++
}

console.log(
  NumberOfConnectedGraph(5, [
    [0, 1],
    [1, 2],
    [3, 4],
  ])
)

// 0 => [1]
// 1 => [2]
// 2 => []
// 3 => [4]
// 4 => []
