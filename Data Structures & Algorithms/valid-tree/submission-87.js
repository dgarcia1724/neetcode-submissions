class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) { 
        // use uf
        const uf = new UnionFind()

        // union add edges 
        // if already unioned, then cycle, so return false
        for (const [n1, n2] of edges) {
            if (!uf.union(n1, n2)) return false
        }

        // count roots
        let roots = new Set()
        for (let i = 0; i < n; i++) {
            roots.add(uf.find(i))
        }

        // find for each node

        // return if === 1 then tree
        return roots.size === 1

    }
}


class UnionFind {
    constructor() {
        this.parents = new Map()
        this.rank = new Map()
    }

    find(x) {
        let parent = this.parents.get(x) || x
        if (x != parent) {
            let root = this.find(parent)
            this.parents.set(x, root)
            return root
        }
        return parent
    }

    union(x, y) {
        // get root of each 
        let xRoot = this.find(x)
        let yRoot = this.find(y)

        if (xRoot === yRoot) return false

        // get rank of each root 
        let xRootRank = this.rank.get(xRoot) || 0
        let yRootRank = this.rank.get(yRoot) || 0

        //  if same rank then increase height of 1
        if (xRootRank === yRootRank) {
            this.parents.set(xRoot, yRoot)
            this.rank.set(yRoot, yRootRank + 1)
        // otherwise, make higher rank the root
        } else if (xRootRank < yRootRank) {
            this.parents.set(xRoot, yRoot)
        } else {
            this.parents.set(yRoot, xRoot)
        }
        return true
    }
}


