class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        // "A valid tree is connected and contains no cycles.
        // It must have exactly n - 1 edges."
        if (edges.length !== n - 1) return false;

        // "I'll use Union Find to track connected components.
        // Initially, each node belongs to its own component."
        const uf = new UnionFind();

        for (const [n1, n2] of edges) {
            // "For each edge, I'll try to merge its endpoints' components.
            // If they're already connected, adding this edge creates a cycle."
            if (!uf.union(n1, n2)) return false;
        }

        // "Every successful union reduces the component count by one.
        // Starting with n components, n - 1 successful unions leaves one.
        // So the graph is connected and has no cycles."
        return true;
    }
}

class UnionFind {
    constructor() {
        // Maps a node to its parent in the Union Find structure.
        // Following parent pointers eventually reaches a root.
        // Nodes with the same root belong to the same component.
        //
        // "I'll store parent pointers in a map.
        // A missing entry means the node is its own parent."
        this.parents = new Map();

        // Stores ranks for roots, which guide how we merge components.
        // Rank estimates tree height; it is NOT the component's size.
        // A missing entry defaults to rank 1.
        //
        // "I'll use union by rank to keep the parent trees shallow."
        this.rank = new Map();
    }

    findParent(x) {
        // "This method finds the root representing x's component."

        // Read x's immediate parent.
        // If x has no stored parent, treat x as its own root.
        // Use ?? because node 0 is a valid parent.
        let y = this.parents.get(x) ?? x;

        // If x and its parent differ, x is not a root.
        if (x !== y) {
            // "I'll recursively find the root, then make x point
            // directly to it. This is path compression,
            // which speeds up future lookups."
            this.parents.set(x, this.findParent(y));

            // Read x's updated parent, which is now the root.
            y = this.parents.get(x);
        }

        // If x was already a root, y is x.
        // Otherwise, y is the root found through recursion.
        return y;
    }

    union(n1, n2) {
        // "I'll find the roots of both endpoints."
        let p1 = this.findParent(n1);
        let p2 = this.findParent(n2);

        // "If the roots match, the nodes are already connected.
        // This edge would create a cycle, so I'll return false."
        if (p1 === p2) return false;

        // Read each root's rank.
        // A root without a stored rank starts at 1.
        let r1 = this.rank.get(p1) || 1;
        let r2 = this.rank.get(p2) || 1;

        // "I'll attach the lower-rank root beneath the higher-rank root."
        if (r1 > r2) {
            // p1 has higher rank, so p2 becomes its child.
            // p1's rank stays the same.
            this.parents.set(p2, p1);
        } else if (r2 > r1) {
            // p2 has higher rank, so p1 becomes its child.
            // p2's rank stays the same.
            this.parents.set(p1, p2);
        } else {
            // "If the ranks are equal, I can choose either root.
            // I'll attach p1 beneath p2 and increase p2's rank."
            this.parents.set(p1, p2);
            this.rank.set(p2, r2 + 1);
        }

        // "The components were separate and are now merged,
        // so I'll return true."
        return true;
    }
}