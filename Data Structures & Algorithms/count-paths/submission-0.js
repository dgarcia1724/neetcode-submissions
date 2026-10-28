class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const memo = new Map();

        const dfs = (row, col) => {
            // "Reaching the destination counts as one valid path."
            if (row === m - 1 && col === n - 1) return 1;

            // "Moving outside the grid contributes zero paths."
            if (row >= m || col >= n) return 0;

            const key = `${row},${col}`;

            // "If I've already solved this cell, I'll reuse its result."
            if (memo.has(key)) return memo.get(key);

            // "The paths from this cell are the paths going right
            // plus the paths going down."
            const paths = dfs(row, col + 1) + dfs(row + 1, col);

            memo.set(key, paths);
            return paths;
        };

        return dfs(0, 0);
    }
}

// Time: O(m × n) — solve each cell once.
// Space: O(m × n) — memo, plus an O(m + n) recursion stack.
// Assumes constant-time map operations and coordinate-key handling.