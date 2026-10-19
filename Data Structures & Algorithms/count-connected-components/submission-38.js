class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        // "I'll use Union Find to group connected nodes.
        // Each group is represented by a root."
        const uf = new UnionFind()

        // "For each edge, I'll merge the groups containing each node"
        for (const [a, b] of edges) {
            uf.union(a, b)
        }

        // "The number of unique roots gives us the number of components."
        const connectedComponents = new Set()

        // "I'll check every node so isolated nodes are counted too."
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
        // "A node without a stored parent is its own root."
        let parent = this.parents.get(x) ?? x

        if (parent !== x) {
            // "I'll recursively find the root and use path compression
            // so future lookups go directly to it."
            let root = this.find(parent)
            this.parents.set(x, root)
            return root
        }

        return x
    }

    union(x, y) {
        let rootX = this.find(x)
        let rootY = this.find(y)

        // "If they already share a root, there's nothing to merge."
        if (rootX === rootY) return false

        let rankX = this.rank.get(rootX) ?? 1
        let rankY = this.rank.get(rootY) ?? 1

        // "I'll attach the lower-rank tree under the higher-rank tree
        // to keep the structure shallow."
        if (rankX > rankY) {
            this.parents.set(rootY, rootX)
        } else if (rankY > rankX) {
            this.parents.set(rootX, rootY)
        } else {
            // "If the ranks are equal, either root can become the parent.
            // I'll increment the chosen root's rank."
            this.parents.set(rootX, rootY)
            this.rank.set(rootY, rankY + 1)
        }

        return true
    }

    // With path compression and union by rank, time is O((n + e) · α(n)), effectively linear, 
    // and space is O(n), where e is the number of edges.
}