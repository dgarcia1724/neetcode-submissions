class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const cache = new Map()

        const dfs = (r,c) => {
            if (r === m-1 && c === n - 1) {
                return 1
            }
            if (r < 0 || r >= m ||
                c < 0 || c >= n
            ) return 0

            const key = `${r},${c}`
            if (cache.has(key)) return cache.get(key)
            let paths = dfs(r+1,c) + dfs(r,c+1)
            cache.set(key, paths)
            return paths
        }

        return dfs(0,0)
    }
}
