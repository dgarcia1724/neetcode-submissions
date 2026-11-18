class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        const ROWS = board.length;
        const COLS = board[0].length;

        const markSafe = (r,c) => {
            if (
                r < 0 || r >= ROWS ||
                c < 0 || c >= COLS || 
                board[r][c] !== "O"
            ) return 

            board[r][c] = "S"
            markSafe(r+1,c)
            markSafe(r-1,c)
            markSafe(r,c+1)
            markSafe(r,c-1)
        }

        // top & bottom
        for (let c = 0; c < COLS; c++) {
            markSafe(0, c)
            markSafe(ROWS-1, c)
        }

        // LEFT & RIGHT
        for (let r = 0; r < ROWS; r++) {
            markSafe(r, 0)
            markSafe(r, COLS-1)
        }

        for (let r= 0; r < ROWS; r++) {
            for (let c= 0; c < COLS; c++) { 
                if (board[r][c] == "O") {
                    board[r][c] = "X"
                } else if (board[r][c] == "S") {
                    board[r][c] = "O"
                }
            }
        }

        






    }
}
