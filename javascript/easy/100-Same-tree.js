/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 * @complexities Time => O(N) | Space => O(D), where n is the number of the nodes in the tree and D is the depth of the tree
 */
var isSameTree = function (p, q) {
  return isSameTreeHelper(p, q)
}

const isSameTreeHelper = (treeOne, treeTwo) => {
  // Base Case
  if (treeOne === null && treeTwo === null) {
    return true
  }

  // Base Case
  if (treeOne === null || treeTwo === null) {
    return false
  }

  // Base Case
  if (treeOne.val !== treeTwo.val) {
    return false
  }

  if (!isSameTreeHelper(treeOne.left, treeTwo.left) || !isSameTreeHelper(treeOne.right, treeTwo.right)) {
    return false
  }

  return true
}
