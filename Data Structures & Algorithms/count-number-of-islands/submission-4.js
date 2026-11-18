class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const ROWS = grid.length, COLS = grid[0].length;

        let islands = 0

        // visited
        let visited = new Set()

        // base case
        // if r / c out of bounds 
        // 
        const dfs = (r,c) => {
            if (
                r <0 || r >= ROWS ||
                c < 0 || c >= COLS ||
                visited.has(`${r},${c}`) ||
                grid[r][c] == "0"
            ) return

            visited.add(`${r},${c}`)
            dfs(r+1,c)
            dfs(r-1,c)
            dfs(r,c+1)
            dfs(r,c-1)

        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if ( !visited.has(`${r},${c}`) && grid[r][c] === "1"  ) {
                    islands += 1
                    dfs(r,c)
                }
            }
        }

        return islands

    }
}
