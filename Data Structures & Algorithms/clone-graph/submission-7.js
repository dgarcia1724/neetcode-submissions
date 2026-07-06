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
        if (!node) return null;

        const oldToNew = {}; // use node.val as key

        const dfs = (n) => {
            if (oldToNew[n.val]) return oldToNew[n.val];

            const copy = new Node(n.val);
            oldToNew[n.val] = copy;

            for (const nei of n.neighbors) {
                copy.neighbors.push(dfs(nei));
            }

            return copy;
        };

        return dfs(node);
    }
}
