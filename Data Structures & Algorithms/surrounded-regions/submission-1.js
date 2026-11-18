class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Modify board in-place.
     */
    solve(board) {
        // Get the dimensions of the board.
        let ROWS = board.length,
            COLS = board[0].length;

        // Use DFS to find all 'O' cells connected to the border.
        // These cells cannot be captured, so we'll temporarily mark them 'T'.
        const capture = (r, c) => {

            // Stop if we're out of bounds or the cell is not 'O'.
            if (
                r < 0 ||
                c < 0 ||
                r == ROWS ||
                c == COLS ||
                board[r][c] !== 'O'
            ) {
                return;
            }

            // Mark this cell as safe so we don't visit it again.
            board[r][c] = 'T';

            // Explore all four directions to find connected 'O' cells.
            capture(r + 1, c);
            capture(r - 1, c);
            capture(r, c + 1);
            capture(r, c - 1);
        };

        // Check the left and right borders.
        // Any 'O' connected to these borders cannot be captured.
        for (let r = 0; r < ROWS; r++) {
            if (board[r][0] === 'O') capture(r, 0);
            if (board[r][COLS - 1] === 'O') capture(r, COLS - 1);
        }

        // Check the top and bottom borders.
        // Mark all border-connected 'O' cells as safe.
        for (let c = 0; c < COLS; c++) {
            if (board[0][c] === 'O') capture(0, c);
            if (board[ROWS - 1][c] === 'O') capture(ROWS - 1, c);
        }

        // Iterate through every cell in the board.
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {

                // Any remaining 'O' is surrounded, so capture it.
                if (board[r][c] === 'O') board[r][c] = 'X';

                // Restore safe cells back to their original value.
                if (board[r][c] === 'T') board[r][c] = 'O';
            }
        }
    }
}

// Time Complexity: O(ROWS * COLS)
// Each cell is visited at most once during DFS,
// and we scan the entire board once at the end.

// Space Complexity: O(ROWS * COLS)
// We modify the board in-place, so no extra visited set is needed.
// However, the recursive DFS call stack can grow to O(ROWS * COLS)
// in the worst case.