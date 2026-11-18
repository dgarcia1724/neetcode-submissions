/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        let oldToNew = new Map()

        const dfs = (node) => {
            if (oldToNew.has(node)) {
                return oldToNew.get(node)
            }
            const clone = new Node(node.val)
            oldToNew.set(node, clone)

            for (const nei of node.neighbors) {
                clone.neighbors.push(dfs(nei))
            }
            return clone

        }

        if (node) return dfs(node)
        return null


    }
}
