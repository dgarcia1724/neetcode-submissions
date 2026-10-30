class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        // "I'll work backward, keeping the answers for
        // the next house and the house after that."
        let next = 0;
        let nextNext = 0;

        for (let i = nums.length - 1; i >= 0; i--) {
            // "I can rob this house and skip its neighbor,
            // or skip this house and take the next house's best answer."
            const best = Math.max(nums[i] + nextNext, next);

            // "I'll shift the saved answers for the next iteration."
            nextNext = next;
            next = best;
        }

        return next;
    }
}

// Time: O(n) — visit each house once.
// Space: O(1) — keep only a fixed number of variables.
// n = nums.length.