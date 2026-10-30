class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        // "I'll use DFS with memoization.
        // Each index maps to the most money I can rob from there onward."
        const cache = new Map();

        const dfs = (i) => {
            // "Past the last house, there's no money left to rob."
            if (i >= nums.length) return 0;

            // "I'll reuse the answer if I've already solved this index."
            if (cache.has(i)) return cache.get(i);

            // "I have two choices:
            // rob this house and skip its neighbor, or skip this house."
            const skip = dfs(i + 1);
            const rob = nums[i] + dfs(i + 2);

            // "I'll cache and return whichever choice earns more."
            const best = Math.max(rob, skip);
            cache.set(i, best);
            return best;
        };

        return dfs(0);
    }
}

// Time: O(n) — solve each index once, assuming O(1) Map operations.
// Space: O(n) — the cache and recursion stack each use O(n).
// n = nums.length.