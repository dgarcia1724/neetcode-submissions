class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        // "A tree must have exactly n - 1 edges."
        if (edges.length !== n - 1) return false;

        // "Initially, each node is its own component."
        const uf = new UnionFind();

        for (const [a, b] of edges) {
            // "Joining already-connected nodes creates a cycle."
            if (!uf.union(a, b)) return false;
        } 
         
        const connectedComponents = new Set();

        for (let node = 0; node < n; node++) {
            connectedComponents.add(uf.find(node));
        }

        return connectedComponents.size === 1;
    }
}

class UnionFind {
    constructor() {
        // Node → immediate parent. Missing means it's its own root.
        this.parents = new Map();

        // Root → height estimate, starting at 1.
        this.rank = new Map();
    }

    // A root represents an entire connected component.
    find(x) {
        let parent = this.parents.get(x) ?? x;

        if (x !== parent) {
            // "Path compression makes x point directly to its root."
            const root = this.find(parent);
            this.parents.set(x, root);
            return root;
        }

        return x;
    }

    union(a, b) {
        const rootA = this.find(a);
        const rootB = this.find(b);

        // "Matching roots mean the nodes are already connected."
        if (rootA === rootB) return false;

        const rankA = this.rank.get(rootA) ?? 1;
        const rankB = this.rank.get(rootB) ?? 1;

        // "Attach the lower-rank root under the higher-rank root."
        if (rankA > rankB) {
            this.parents.set(rootB, rootA);
        } else if (rankB > rankA) {
            this.parents.set(rootA, rootB);
        } else {
            // "Equal ranks: choose either root and increase its rank."
            this.parents.set(rootA, rootB);
            this.rank.set(rootB, rankB + 1);
        }

        return true;
    }
}

// Time: O(n × α(n)), effectively O(n).
// We process n - 1 edges, with nearly constant amortized time per union.
// α(n) grows so slowly that it is effectively constant in practice.
// This assumes Map lookups and updates take O(1) on average. 

    // α(n), pronounced "alpha of n," is the inverse Ackermann function.
    // It grows incredibly slowly—at most about 5 for any practical input size.
    // That's why Union Find's O(α(n)) amortized time per operation
    // is considered effectively constant time.


//
// Space: O(n).
// The parent and rank maps store at most O(n) entries.
// The recursive find calls use O(log n) stack space at most (Because union by rank limits the tree’s height to O(log n) - To increase rank again, 
// you need another tree with the same rank, which requires at least as many nodes. Each increase therefore requires at least twice as many nodes.),
// which keeps the total auxiliary space O(n).