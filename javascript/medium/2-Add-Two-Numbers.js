/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
class Node {
  constructor(value) {
    this.val = value
    this.next = null
  }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// var addTwoNumbers = function (l1, l2) {
//   let firstLinkedListNumbers = ""
//   let secondLinkedListNumbers = ""
//   while (l1) {
//     firstLinkedListNumbers += l1.val.toString()
//     l1 = l1.next
//   }

//   while (l2) {
//     secondLinkedListNumbers += l2.val.toString()
//     l2 = l2.next
//   }

//   let firstNum = reverseString(firstLinkedListNumbers)
//   let secondNum = reverseString(secondLinkedListNumbers)
//   let sum = +firstNum + +secondNum

//   let newLinkedList = new ListNode(-100)
//   let head = newLinkedList

//   sum = reverseString(sum.toString())

//   for (let idx = 0; idx < sum.length; idx++) {
//     newLinkedList.next = sum[idx]
//     newLinkedList = newLinkedList.next
//   }

//   return head.next
// }

// const reverseString = (string) => {
//   let reversedString = ""
//   for (let idx = 0; idx < string.length; idx++) {
//     reversedString += string[idx].toString()
//   }

//   return reversedString
// }

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let currentNode = new ListNode(-1)
  const head = currentNode
  let carry = 0
  let nodeOne = l1
  let nodeTwo = l2
  while (nodeOne || nodeTwo || carry != 0) {
    let x = nodeOne !== null ? nodeOne.val : 0
    let y = nodeTwo !== null ? nodeTwo.val : 0
    let sum = x + y + carry
    const newValue = Math.floor(sum % 10)
    const newNode = ListNode(newValue)
    carry = Math.floor(sum / 10)
    currentNode.next = newNode
    currentNode = newNode
    nodeTwo = nodeTwo !== null ? nodeTwo.next : null
    nodeOne = nodeOne !== null ? nodeOne.next : null
  }
  return head.next
}

console.log(addTwoNumbers())
