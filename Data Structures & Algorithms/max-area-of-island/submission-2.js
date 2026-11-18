class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let area = 0;

        const ROWS = grid.length, COLS = grid[0].length
        const dir = [
            [1,0],
            [-1,0],
            [0,1],
            [0,-1],
        ]

        const dfs = (r,c) => {
            if (
                r < 0 || r >= ROWS ||
                c < 0 || c >= COLS ||
                grid[r][c] === 0
            ) return 0

            grid[r][c] = 0
            let res = 1
            for (const [dr, dc] of dir) {
                let nr = r + dr, nc = c + dc
                res += dfs(nr, nc)
            }
            return res
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                area = Math.max(dfs(r,c), area)
            }
        }

        return area





    }
}
