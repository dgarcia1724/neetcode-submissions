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

        const oldToNew = new Map();

        const dfs = (n) => {
            if (oldToNew.has(n)) return oldToNew.get(n);

            const copy = new Node(n.val);
            oldToNew.set(n, copy);

            for (const nei of n.neighbors) {
                copy.neighbors.push(dfs(nei));
            }

            return copy;
        };

        return dfs(node);
    }
}
