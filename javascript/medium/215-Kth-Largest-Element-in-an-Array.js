/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const heap = new MaxHeap(nums)
  let index = 1
  while (index < k) {
    heap.remove()
    index++
  }
  return heap.remove()
}

class MaxHeap {
  constructor(array) {
    this.heap = this.buildHeap(array)
  }

  buildHeap(array) {
    const firstParentIdx = array.length - 1
    for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
      this.siftDown(currentIdx, array.length - 1, array)
    }
    return array
  }

  insert(value) {
    this.heap.push(value)
    this.siftUp(this.heap.length - 1, this.heap)
  }

  remove() {
    this.swap(this.heap, 0, this.heap.length - 1)
    const valueToRemove = this.heap.pop()
    this.siftDown(0, this.heap.length - 1, this.heap)
    return valueToRemove
  }

  getMax() {
    return this.heap[0]
  }

  siftDown(currentIdx, endIdx, heap) {
    let childOneIdx = 2 * currentIdx + 1
    while (childOneIdx <= endIdx) {
      const childTwoIdx = 2 * currentIdx + 2 <= endIdx ? 2 * currentIdx + 2 : -1
      let idxToSwap
      if (childTwoIdx !== -1 && heap[childTwoIdx] > heap[childOneIdx]) {
        idxToSwap = childTwoIdx
      } else {
        idxToSwap = childOneIdx
      }

      if (heap[idxToSwap] > heap[currentIdx]) {
        this.swap(heap, currentIdx, idxToSwap)
        currentIdx = idxToSwap
        childOneIdx = 2 * currentIdx + 1
      } else {
        return
      }
    }
  }

  siftUp(currentIdx, heap) {
    let parentIdx = Math.floor((currentIdx - 1) / 2)
    while (parentIdx > 0 && heap[parentIdx] < heap[currentIdx]) {
      this.swap(heap, parentIdx, currentIdx)
      currentIdx = parentIdx
      parentIdx = Math.floor((currentIdx - 1) / 2)
    }
  }

  swap(heap, firstIdx, secondIdx) {
    const temp = heap[firstIdx]
    heap[firstIdx] = heap[secondIdx]
    heap[secondIdx] = temp
  }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  nums.sort((a, b) => a - b)
  for (let idx = nums.length; idx >= 0; idx--) {
    if (k === 0) {
      return nums[idx]
    }
    k--
  }
}
