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
        const oldToNew = new Map();

        function dfs(node) {
            if (oldToNew.has(node)) return oldToNew.get(node);

            let copy = new Node(node.val);
            oldToNew.set(node, copy);
            for (const nei of node.neighbors) {
                copy.neighbors.push(dfs(nei))
            }
            return copy
        }

        return node ? dfs(node) : null;
    }
}
