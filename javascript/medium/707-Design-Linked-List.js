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
