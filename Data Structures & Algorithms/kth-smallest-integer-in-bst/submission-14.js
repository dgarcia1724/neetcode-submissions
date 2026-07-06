/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let arr = []

        function dfs(node) {
            if (!node) return;
            dfs(node.left);
            arr.push(node.val)
            dfs(node.right);
        }

        dfs(root);
        return arr[k-1];
    }
}
