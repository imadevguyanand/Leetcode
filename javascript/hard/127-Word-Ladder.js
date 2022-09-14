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
      const pattern = word.slice(0, i) + "*" + word.slice(i + 1, word.length)
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
    for (let x = 0; x < queue.length; x++) {
      const word = queue.shift()
      if (word === endWord) {
        return wordCount
      }
      for (let i = 0; i < word.length; i++) {
        const pattern = word.slice(0, i) + "*" + word.slice(i + 1, word.length)
        for (const newWord of hashTable[pattern]) {
          if (newWord in visited) {
            continue
          }
          visited[newWord] = true
          queue.push(newWord)
        }
      }
    }
    wordCount += 1
  }
  return 0
}

console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]))
//console.log(ladderLength("red", "tax", ["ted", "tex", "tax", "tad", "den", "rex", "pee"]))
