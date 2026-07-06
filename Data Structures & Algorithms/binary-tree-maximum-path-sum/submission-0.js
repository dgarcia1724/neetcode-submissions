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
     * @return {number}
     */
    maxPathSum(root) {
        let res = root.val;

        function dfs(node) {
            if (!node) return 0;

            let leftMax = dfs(node.left);
            let rightMax = dfs(node.right);

            leftMax = Math.max(leftMax, 0);
            rightMax = Math.max(rightMax, 0);

            res = Math.max(res, node.val + leftMax + rightMax);

            return node.val + Math.max(leftMax, rightMax);
        }

        dfs(root);
        return res;
    }
}
