/*
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (root !== null) {
    tempFunction(root)
    invertTree(root.left)
    invertTree(root.right)
  }
  return root
}

const tempFunction = (root) => {
  let temp = root.right
  root.right = root.left
  root.left = temp
}

console.log(invertTree([4, 2, 7, 1, 3, 6, 9]))
