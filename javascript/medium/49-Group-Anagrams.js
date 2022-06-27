/**
 * @param {string[]} strs
 * @return {string[][]}
 * @complexities Time => O(n) | Space => O(n)
 * @description HashTable and standard functions (Split and Join)
 */
var groupAnagrams = function (strs) {
  const anagrams = {}
  for (word of strs) {
    // Split the string "eat" into an array [ 'e', 'a', 't' ]
    let arrayOfstring = word.split("")
    // Sort in ascending order
    let sortedArrayOfString = arrayOfstring.sort() // [ 'a', 'e', 't' ]
    // Join the array and return a string
    let sortedWord = sortedArrayOfString.join("")
    if (sortedWord in anagrams) {
      anagrams[sortedWord] = [...anagrams[sortedWord], word]
    } else {
      anagrams[sortedWord] = [word]
    }
  }
  return Object.values(anagrams)
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
