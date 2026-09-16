class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const ROWS = board.length, COLS = board.length;

        // keep track of rows, cols, boxes
        const rows = new Map()
        const cols = new Map()
        const boxes = new Map()

        for (let r = 0; r < ROWS; r++) {
            for (let c= 0; c < COLS; c++) {
                const cell = board[r][c]
                if (cell === ".") continue

                const boxKey = `${Math.floor(r/3)},${Math.floor(c/3)}`

                // check duplicate & not valid
                if (
                    (rows.has(r) && rows.get(r).has(cell)) ||
                    (cols.has(c) && cols.get(c).has(cell)) || 
                    (boxes.has(boxKey) && boxes.get(boxKey).has(cell))
                     ) {
                        return false
                     }


                // add set if not already present 
                if (!rows.has(r)) rows.set(r, new Set())
                if (!cols.has(c)) cols.set(c, new Set())
                if (!boxes.has(boxKey)) boxes.set(boxKey, new Set())

                rows.get(r).add(cell)
                cols.get(c).add(cell)
                boxes.get(boxKey).add(cell)
            }
        }

        return true
    }
}
