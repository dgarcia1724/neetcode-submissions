class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const ROWS = heights.length;
        const COLS = heights[0].length;

        let atl = new Set()
        let pac = new Set()

        const dfs = (r,c, hashset, prevH) => {
            if (
                // out of bounds
                // already in hashset
                // prevH is >
                r < 0 || r >= ROWS ||
                c < 0 || c >= COLS ||
                hashset.has(`${r},${c}`) ||
                prevH > heights[r][c]
            ) return 
            hashset.add(`${r},${c}`)
            dfs(r+1,c, hashset, heights[r][c])
            dfs(r-1,c, hashset, heights[r][c])
            dfs(r,c+1, hashset, heights[r][c])
            dfs(r,c-1, hashset, heights[r][c])
        }

        // atl

        for (let r = 0; r < ROWS; r++) {
            dfs(r, COLS - 1, atl, 0)
        }
        
        for (let c = 0; c < COLS; c++) {
            dfs(ROWS-1, c, atl, 0)
        }

        // pac
        for (let r = 0; r < ROWS; r++) {
            dfs(r, 0, pac, 0)
        }
        
        for (let c = 0; c < COLS; c++) {
            dfs(0, c, pac, 0)
        }

        let res = []
        for (let r =0; r < ROWS; r++) {
            for (let c= 0; c < COLS; c++) {
                if (atl.has(`${r},${c}`) && pac.has(`${r},${c}`)) {
                    res.push([r,c])
                }
            }
        }
        return res


    }
}
