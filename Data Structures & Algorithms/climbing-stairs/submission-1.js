class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const cache = new Map() // n -> ways

        const dfs = (n) => {
            if (cache.has(n)) {
                return cache.get(n)
            }
            if (n <= 1) {
                return 1
            }


            const ways = dfs(n-1) + dfs(n-2)
            cache.set(n, ways)
            return ways
        }

        return dfs(n)
    }
}
