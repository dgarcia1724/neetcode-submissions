class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        // "A tree with n nodes must have exactly n - 1 edges."
        if (edges.length !== n - 1) return false;

        const uf = new UnionFind();

        for (const [n1, n2] of edges) {
            // "If they're already connected, this edge creates a cycle."
            if (!uf.union(n1, n2)) return false;
        }

        // "With n - 1 edges and no cycles, the graph must be connected."
        return true;
    }
}

class UnionFind {
    constructor() {
        this.parents = new Map()
        this.rank = new Map()
    }


    findParent(x) {
        let y = this.parents.get(x) ?? x
        if (x !== y) {
            this.parents.set(x, this.findParent(y))
            y = this.parents.get(x)
        }
        return y
    }


    union(n1, n2) {
        let p1 = this.findParent(n1)
        let p2 = this.findParent(n2)
        if (p1 === p2) return false


        let r1 = this.rank.get(p1) || 1
        let r2 = this.rank.get(p2) || 1


        if (r1 > r2) {
            this.parents.set(p2, p1)
        } else if (r2 > r1) {
            this.parents.set(p1, p2)
        } else {
            this.parents.set(p1, p2)
            this.rank.set(p2, r2 + 1)
        }
        return true
    }
}
