class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        const rows = matrix.length, cols = matrix[0].length
        this.sumMat = Array.from({length: rows+1}, ()=> new Array(cols+1).fill(0))

        for (let r = 0; r < rows; r++) {
            let rowPrefix = 0
            for (let c=0; c < cols; c++) {
                rowPrefix += matrix[r][c]
                const above = this.sumMat[r][c+1]
                this.sumMat[r+1][c+1] = rowPrefix + above
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
        row1++
        col1++
        row2++
        col2++

        const bottomRight = this.sumMat[row2][col2]
        const top = this.sumMat[row1-1][col2]
        const left = this.sumMat[row2][col1-1]
        const topLeft = this.sumMat[row1-1][col1-1]
        return bottomRight - top - left + topLeft


    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
