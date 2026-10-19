class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const uf = new UnionFind()
        for (const [a,b] of edges) {
            uf.union(a,b)
        }

        const connectedComponents = new Set()
        for (let node = 0; node < n; node++) {
            connectedComponents.add(uf.find(node))
        }

        return connectedComponents.size
    }

}


class UnionFind {
    constructor() {
        this.rank = new Map()
        this.parents = new Map()
    }

    find(x) {
        let parent = this.parents.get(x) ?? x
        if (parent !== x) {
            let root = this.find(parent)
            this.parents.set(x, root)
            return root

        }
        return x
    }

    union(x,y) {
        let rootX = this.find(x)
        let rootY = this.find(y)

        // 
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
