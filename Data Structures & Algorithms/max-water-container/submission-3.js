class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // “I'll use two pointers, starting at opposite ends
        // to begin with the widest possible container.”
        let l = 0, r = heights.length - 1;
        let res = 0;

        while (l < r) {
            // “The area is the width times the shorter wall's height,
            // because water would spill over the shorter wall.”
            let width = r - l;
            let height = Math.min(heights[l], heights[r]);

            // “I'll keep track of the largest area found.”
            res = Math.max(res, width * height);

            // “Moving the taller wall can't improve the area:
            // the width shrinks, and the shorter wall still limits the height.
            // So I'll move the shorter wall to look for a taller one.”
            if (heights[l] < heights[r]) {
                l++;
            } else {
                // “If the heights are equal, I can move either pointer.”
                r--;
            }
        }

        // “Time is O(n): each step moves one pointer inward,
        // so there are at most n - 1 iterations.
        // Auxiliary space is O(1): I use a fixed number of variables.”
        return res;
    }
}