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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        let inorderValueToIndex = new Map()

        for (let i = 0; i < inorder.length; i++) {
            inorderValueToIndex.set(inorder[i], i)
        }

        let preorderIndex = 0

        function dfs(l,r) {
            if (l > r) return null

            let rootValue = preorder[preorderIndex]
            preorderIndex++
            let root = new TreeNode(rootValue)
            let split = inorderValueToIndex.get(rootValue)

            root.left = dfs(l, split - 1 )
            root.right = dfs(split + 1, r )
            return root
        }



        return dfs(0, preorder.length - 1)

    }
}
