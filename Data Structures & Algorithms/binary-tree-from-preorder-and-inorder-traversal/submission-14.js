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
        let inorderIndexMap = new Map()

        for (let i = 0; i < inorder.length; i++) {
            inorderIndexMap.set(inorder[i], i)
        }

        let preorderIndex = 0

        function dfs(l,r) {
            if (l > r) return null

            let rootValue = preorder[preorderIndex]
            preorderIndex++
            let root = new TreeNode(rootValue)

            root.left = dfs(l, inorderIndexMap.get(rootValue) - 1 )
            root.right = dfs(inorderIndexMap.get(rootValue) + 1, r )
            return root
        }



        return dfs(0, preorder.length - 1)

    }
}
