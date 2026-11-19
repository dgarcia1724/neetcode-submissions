class Solution {
    /**
     * @param {number} n
     * @param {number[]} leftChild
     * @param {number[]} rightChild
     * @return {boolean}
     */
    validateBinaryTreeNodes(n, leftChild, rightChild) {

        // set of nodes with parents
        const hasParents = new Set(
            [...leftChild, ...rightChild].filter(c => c !== -1)
        )

        // if all nodes have parents, then no root & not valid tree
        if (hasParents.size === n) return false

        // get root
        let root = 0;
        for (let i = 0; i < n; i++) {
            if (!hasParents.has(i)) {
                root = i
            }
        }

        // root is only node that is not in the set


        // then dfs to see if any are visited
        let visited = new Set()

        const dfs = (node) => {
            if (node === -1) return true
            if (visited.has(node)) return false

            visited.add(node)
            return dfs(leftChild[node]) && dfs(rightChild[node])

        }


        // return dfs(root) && visited.size == n
        return dfs(root) && visited.size == n
    }
}
