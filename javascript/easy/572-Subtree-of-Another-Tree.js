/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 * @complexities Time => O(N) | Space => O(D), where n is the number of nodes and D is the depth of the trees
 */
var isSubtree = function (root, subRoot) {
  // Base Case
  if (root === null) {
    return false
  }

  if (sameTree(root, subRoot)) {
    return true
  }

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
}

const sameTree = (treeOne, treeTwo) => {
  // Base Case
  if (treeOne === null && treeTwo === null) {
    return true
  }

  // Base Case
  if (treeOne === null || treeTwo === null) {
    return false
  }

  if (treeOne.val !== treeTwo.val) {
    return false
  }

  return sameTree(treeOne.left, treeTwo.left) && sameTree(treeOne.right, treeTwo.right)
}
