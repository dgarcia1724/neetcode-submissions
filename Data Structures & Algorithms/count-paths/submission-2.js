class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const ROWS = m, COLS = n;

        const cache = new Map()

        const dfs = (r,c) => {
            if (r===ROWS-1 && c===COLS-1) {
                return 1
            }
            if (r < 0 || r >= ROWS ||
                c < 0 || c >= COLS
            ) return 0
            const key = `${r},${c}`

            if (cache.has(key)) return cache.get(`${r},${c}`)
            const paths = dfs(r+1,c) + dfs(r,c+1)
            cache.set(key, paths)
            return paths

        }

        return dfs(0,0)
    }
}
