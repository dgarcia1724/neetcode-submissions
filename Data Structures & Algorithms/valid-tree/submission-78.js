class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if (edges.length !== n-1) {
            return false
        }

        let uf = new UnionFind()
        // union each edge & if false, bc already unioned then we have a cycle & not a tree
        for (const [a,b] of edges) {
            if (!uf.union(a,b)) return false
        }

        let connectedComponents = new Set()
        for (let node = 0; node < n; node++ ) {
            connectedComponents.add(uf.find(node))
        }

        return connectedComponents.size === 1
    }
}


class UnionFind {
    constructor() {
        this.parents = new Map();
        this.rank = new Map()
    }

    find(x) {
        let parent = this.parents.get(x) ?? x
        if (x !== parent) {
            // find root
            let root = this.find(parent)
            // set parent to be root
            this.parents.set(x, root)
            // return root
            return root
        }

        return x

    }

    union(x, y) {
        let xRoot = this.find(x), yRoot = this.find(y)

        // if they are same, then we have connected component already
        // return false
        if (xRoot === yRoot) return false 

        let xRank = this.rank.get(x) ?? 1
        let yRank = this.rank.get(y) ?? 1

        if (xRank > yRank) {
            this.parents.set(yRoot, xRoot)
        } else if (yRank > xRank) {
            this.parents.set(xRoot, yRoot)
        } else {
            this.parents.set(xRoot, yRoot)
            this.rank.set(y, yRank+1)
        }

        return true

    }
}