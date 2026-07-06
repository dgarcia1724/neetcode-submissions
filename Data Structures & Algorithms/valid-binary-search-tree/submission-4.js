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
     * @return {boolean}
     */
    isValidBST(root) {
        const dfs = (root, left, right) => {
            if (!root) return true;

            if (!(root.val > left && root.val < right)) {
                return false;
            }
            return (
                dfs(root.left,left,root.val) &&
                dfs(root.right,root.val,right)
            )
        }
        return dfs(root,-Infinity, Infinity)
    }
}
