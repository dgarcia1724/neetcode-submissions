class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0, r = heights.length -1;
        let res = 0;

        // 2 pointers 
        // start from leftmost & rightmost
        // keep track of res with MAX

        // always choose to keep the tallest wall, to potentially get greater area in future
        // capped by shorted wall

        while (l < r) {
            let width = r-l
            let height = Math.min(heights[l], heights[r])
            res = Math.max(res, width*height)

            if (heights[l] < heights[r]) {
                l++
            } else {
                r--
            }
        }

        return res
    }
}
