class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class MyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  /**
   *
   * @param {number} value
   * @return {void}
   * @complexities Time => O(1) | Space => O(1)
   * @description If the ll is empty, create a new node and set that as head and tail. If the ll has head then we would create a new node and point its next to the current head and set the new node as the head
   */
  addAtHead(value) {
    const node = new Node(value)
    if (this.head) {
      node.next = this.head
      this.head = node
    } else {
      this.head = node
      this.tail = node
    }
    this.length++
  }

  /**
   *
   * @param {number} index
   * @return {number}
   * @complexities Time => O(n) | Space => O(1)
   * @description Loop through the ll from 0 to index to get the value of the index. If the index is not in the range meaning if its less than 0 or greater than length - 1
   */
  get(index) {
    if (index < 0 || index > this.length - 1) {
      return -1
    }
    let current = this.head
    for (let i = 0; i < index; i++) {
      current = current.next
    }
    return current.value
  }

  /**
   *
   * @param {number} value
   * @return {void}
   * @complexities Time => O(n) | Space => O(1)
   * @description Run a loop to find the next value pointing to null. Create a new node and add the new node to its next pointer and make the new node the tail
   */
  addAtTail(value) {
    if (this.length == 0) {
      this.addAtHead(value)
      return
    }

    let curr = this.head
    while (curr.next != null) {
      curr = curr.next
    }

    const node = new Node(value)
    curr.next = node
    this.tail = node
    this.length++
    return
  }

  /**
   * @param {number} index
   * @param {number} value
   * @return {void}
   * @complexities Time => O(n) | Space => O(1)
   * @description Run a loop to find the index - 1 node. Create a new node and point the index - 1 next to point to new node and point the new node's next to point to current next. If the index is 0 then call the addToHead method. If the index is equal to the length then call the addToTail method
   */
  addAtIndex(index, value) {
    if (index > this.length) {
      return
    }

    if (index == 0) {
      this.addAtHead(value)
      return
    }

    if (index === this.length) {
      this.addAtTail(value)
      return
    }

    let curr = this.head

    for (let i = 0; i < index - 1; i++) {
      curr = curr.next
    }

    const next = curr.next
    const node = new Node(value)

    curr.next = node
    node.next = next
    this.length++

    return
  }

  /**
   * @param {number} index
   * @return {void}
   * @complexities Time => O(n) | Space => O(1)
   * @description Run a loop to find the index - 1 node. Set the current.next = current.next.next
   */
  deleteAtIndex(index) {
    if (this.length === 0 || index > this.length - 1) {
      return
    }

    if (index == 0) {
      this.head = this.head.next
      this.length--
      return
    }

    let current = this.head
    for (let i = 0; i < index - 1; i++) {
      current = current.next
    }
    current.next = current.next.next
    this.length--
  }
}
