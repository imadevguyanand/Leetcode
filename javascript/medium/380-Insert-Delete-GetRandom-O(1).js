class RandomizedSet {
  constructor() {
    this.hashTable = []
    this.array = []
  }

  /**
   * @param {*} value
   * @returns {boolean}
   * @complexities Time => O(1) | Space => O(n)
   */
  insert(value) {
    if (!(value in this.hashTable)) {
      this.hashTable[value] = this.array.length
      this.array[this.array.length] = value
      return true
    } else {
      return false
    }
  }

  /**
   * @param {*} value
   * @returns {boolean}
   * @complexities Time => O(1) | Space => O(n)
   */
  remove(value) {
    if (!(value in this.hashTable)) {
      return false
    }

    // Fetch the hashTable value using the key (value)
    let arrayIndex = this.hashTable[value]

    // Replace the value with len - 1 array value
    this.array[arrayIndex] = this.array[this.array.length - 1]

    // Remove the last element from the array
    this.array.pop()

    // Update the hashTable value with the new key
    this.hashTable[this.array[arrayIndex]] = arrayIndex

    // Remove the value from the hashTable
    return delete this.hashTable[value]
  }

  /**
   * @returns {number}
   * @complexities Time => O(1) | Space => O(n)
   */
  getRandom() {
    // Returns a random integer from 0 to 1:
    const random = Math.random()
    return this.array[Math.floor(random * this.array.length)]
  }
}
