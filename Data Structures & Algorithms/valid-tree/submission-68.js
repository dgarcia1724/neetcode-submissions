class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if (edges.length !== n - 1) return false

        let uf = new UnionFind()
        // detect cycle
        for (const [a,b] of edges) {
            if (!uf.union(a,b)) return false
        }

        return true

    }
}

class UnionFind {
    constructor() {
        this.rank = new Map()
        this.parents = new Map()
    }

    find(x) {
        let parent = this.parents.get(x) ?? x
        if (x !== parent) {
            let root = this.find(parent)
            this.parents.set(x, root)
            return root
        }
        return x
    }

    union(x,y) {
        let rootX = this.find(x)
        let rootY = this.find(y)

        if (rootX === rootY) return false 

        let rankX = this.rank.get(rootX) ?? 1
        let rankY = this.rank.get(rootY) ?? 1

        if (rankX > rankY) {
            this.parents.set(rootY, rootX)
        } else if (rankY > rankX) {
            this.parents.set(rootX, rootY)
        } else {
            this.parents.set(rootX, rootY)
            this.rank.set(rootY, rankY + 1)
        }
        return true
    }
}
