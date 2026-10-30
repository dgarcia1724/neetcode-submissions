class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        // "I'll use DFS with memoization.
        // The cache maps remaining steps to the number of ways to climb them."
        const cache = new Map();

        const dfs = (n) => {
            // "If I've already solved this many steps, I'll reuse the answer."
            if (cache.has(n)) {
                return cache.get(n);
            }

            // "With zero steps remaining, I've completed one valid path.
            // With one step remaining, there's only one way to finish."
            if (n <= 1) {
                return 1;
            }

            // "I can take either one step or two steps.
            // I'll add the number of ways to finish after each choice."
            const ways = dfs(n - 1) + dfs(n - 2);

            // "I'll cache the result so this subproblem is only solved once."
            cache.set(n, ways);
            return ways;
        };

        return dfs(n);
    }
}

// Time: O(n) — solve each remaining-step count once,
// assuming O(1) Map operations.
// Space: O(n) — the cache and recursion stack each use O(n).