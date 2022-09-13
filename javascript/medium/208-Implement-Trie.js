class Trie {
  constructor() {
    this.root = {}
    this.endSymbol = "*"
  }

  /**
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    let node = this.root
    for (let j = 0; j < word.length; j++) {
      let letter = word[j]
      if (!(letter in node)) {
        node[letter] = {}
      }
      node = node[letter]
    }
    node[this.endSymbol] = true
  }

  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    let node = this.root
    for (let i = 0; i < word.length; i++) {
      let letter = word[i]
      if (!(letter in node)) {
        return false
      }
      node = node[letter]
    }
    if (node[this.endSymbol]) {
      return true
    }

    return false
  }

  /**
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    let node = this.root
    for (let i = 0; i < prefix.length; i++) {
      let letter = prefix[i]
      if (!(letter in node)) {
        return false
      }
      node = node[letter]
    }

    return true
  }
}

const object = new Trie()
console.log(object.insert("hotdog"))
console.dir(object.getTree(), { depth: null })
console.log(object.startsWith("dog"))
