class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        const uf = new UnionFind(n)

        // union all edges 
        // if cycle, false
        for (const [n1, n2] of edges) {
            if (!uf.union(n1, n2)) return false
        }

        // check if 1 component
        const components = new Set()
        for (let i = 0; i < n; i++) {
            components.add(uf.find(i))
        }
        return components.size === 1




    }
}

class UnionFind {
    constructor(n) {
        this.parents = Array.from({length:n+1}, (_, i) => i)
        this.rank = new Array(n+1).fill(0)
    }

    find(x) {
        if (x != this.parents[x]) {
            this.parents[x] = this.find(this.parents[x])
        }
        return this.parents[x]
    }

    union(x,y) {
        let rootX = this.find(x)
        let rootY = this.find(y)

        if (rootX == rootY) return false

        if (this.rank[rootX] > this.rank[rootY]) {
            this.parents[rootY] = rootX
        } else if (this.rank[rootY] > this.rank[rootX]) {
            this.parents[rootX] = rootY
        } else {
            this.parents[rootX] = rootY
            this.rank[rootY]++
        }

        return true
    }
}


// "Initialization takes O(n) time to set up the parent and rank arrays."
// "Each find or union operation takes O(α(n)) amortized time using
// Union by Rank and Path Compression."
// "α(n), pronounced 'alpha of n,' is the inverse Ackermann function.
// It grows extremely slowly, making each operation effectively O(1)."
// "For m operations, total time is O(n + m * α(n)), including initialization."
// "Space is O(n) for the parent and rank arrays."
