/**
 * MinStack construction
 */
class MinStack {
  constructor() {
    //Initialize stack and minStack
    this.stack = []
    this.minStack = []
  }

  /**
   * @param {*} value
   * @return {void}
   * @complexities Time => O(1) | Space => O(1)
   */
  push = (value) => {
    if (this.minStack.length === 0 || value <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(value)
    }
    this.stack.push(value)
  }

  /**
   * @return {void}
   * @complexities Time => O(1) | Space => O(1)
   */
  pop = () => {
    if (this.stack.length > 0) {
      const popped = this.stack.pop()
      if (popped === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop()
      }
      return popped
    }
  }

  /**
   * @return {void}
   * @complexities Time => O(1) | Space => O(1)
   */
  top = () => {
    return this.stack[this.stack.length - 1]
  }

  /**
   * @return {integer}
   * @complexities Time => O(1) | Space => O(1)
   */
  getMin = () => {
    return this.minStack[this.minStack.length - 1]
  }
}

let object = new MinStack()
console.log(object.push(0))
console.log(object.push(1))
console.log(object.push(0))
console.log(object.getMin())
console.log(object.pop())
console.log(object.getMin())
