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
 * @return {boolean}
 * @complexities Time => O(n), where n is the number of nodes
 */
var isValidBST = function (root) {
  return helper(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
}

const helper = (root, left, right) => {
  if (root === null) return true
  if (root.val <= left || root.val >= right) return false
  return helper(root.left, left, root.val) && helper(root.right, root.val, right)
}
