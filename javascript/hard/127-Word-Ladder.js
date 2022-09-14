/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 * @complexities Time => O(n * m ^2) | Space =>  O(n * m ^2), where n is the length of the wordlist and m is the length each word
 */
const ladderLength = (beginWord, endWord, wordList) => {
  if (!wordList.includes(endWord)) {
    return 0
  }
  const hashTable = {}
  wordList.push(beginWord)
  for (const word of wordList) {
    for (let i = 0; i < word.length; i++) {
      let pattern = word.slice(0, i) + "*" + word.slice(i + 1, word.length)
      if (!(pattern in hashTable)) {
        hashTable[pattern] = [word]
      } else {
        hashTable[pattern].push(word)
      }
    }
  }

  let wordCount = 1
  const queue = [beginWord]
  const visited = [beginWord]
  while (queue.length) {
    const levelSize = queue.length
    for (let x = 0; x < levelSize; x++) {
      const word = queue.shift()
      if (word === endWord) return wordCount
      for (let x = 0; x < word.length; x++) {
        const pattern = word.slice(0, x) + "*" + word.slice(x + 1)
        for (let nei of hashTable[pattern]) {
          if (nei in visited) continue
          visited[nei] = true
          queue.push(nei)
        }
      }
    }
    wordCount += 1
  }
  return 0
}

console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]))
//console.log(ladderLength("red", "tax", ["ted", "tex", "tax", "tad", "den", "rex", "pee"]))
