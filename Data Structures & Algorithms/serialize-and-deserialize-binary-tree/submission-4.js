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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        let res = []

        const dfs = (root) => {
            if (!root) {
                res.push("N")
                return
            }

            res.push(String(root.val))
            dfs(root.left)
            dfs(root.right)
        }

        dfs(root)

        return res.join(",")
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        const nodes = data.split(",")
        let i = 0;

        const dfs = () => {
            if (nodes[i] === "N") {
                i++
                return null
            }
            let rootVal = Number(nodes[i])
            let treeRoot = new TreeNode(rootVal)
            i++
            treeRoot.left = dfs()
            treeRoot.right = dfs()
            return treeRoot
        }

        return dfs()

    }
}
