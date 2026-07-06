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
        let cnt = k;
        let res = root.val;

        function dfs(node) {
            if (!node) return;
            dfs(node.left);
            cnt--;
            if (cnt === 0) {
                res = node.val;
                return;
            }
            dfs(node.right);
        }

        dfs(root);
        return res;
    }
}
