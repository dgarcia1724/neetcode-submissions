class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        const ROWS = matrix.length, COLS = matrix[0].length;
        // Create a 2D prefix sum matrix with an extra row and column (padded with 0s)
        //---- Top and left — row 0 and column 0 of sumMat are the zero padding, so the real matrix starts at index [1][1].
        this.sumMat = Array.from({ length: ROWS + 1 }, () => new Array(COLS + 1).fill(0));


        // Iterate over the input matrix; ⭐⭐⭐⭐matrix[r][c] maps to sumMat[r+1][c+1]⭐⭐⭐⭐
        // since row 0 and col 0 of sumMat are the zero padding
        for (let r = 0; r < ROWS; r++) {
            let prefix = 0; // Running row sum
            for (let c = 0; c < COLS; c++) {
                prefix += matrix[r][c]; // add to current row sum 

                // We're writing to sumMat[r+1][c+1], so one row up is sumMat[r][c+1] — same
                // column, previous row. It's already filled (or is padding when r === 0)
                const above = this.sumMat[r][c + 1];
                this.sumMat[r + 1][c + 1] = prefix + above; // Row prefix + everything above it
            }
        }
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        // Using inclusion-exclusion principle to calculate submatrix sum 
        // ⭐⭐⭐⭐matrix[r][c] maps to sumMat[r+1][c+1]⭐⭐⭐⭐
        row1++;
        col1++;
        row2++;
        col2++; 

        // 💙💙💙Include this row/col💙💙💙 ❤️❤️❤️stop before this row/col❤️❤️❤️
        const bottomRight = this.sumMat[row2][col2]; // Total area 💙💙💙
        const above = this.sumMat[row1 - 1][col2]; // Exclude top area ❤️❤️❤️
        const left = this.sumMat[row2][col1 - 1]; // Exclude left area ❤️❤️❤️
        const topLeft = this.sumMat[row1 - 1][col1 - 1]; //❤️❤️❤️Part of exlusion, but was exlcuded twice!!!❤️❤️❤️Add back overlapping top-left area once!!! 💓Bc subtracted it 2x, so need to ADD IT ONCE💓
        return bottomRight - above - left + topLeft; // Final submatrix sum
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */