class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let next = 0
        let nextNext = 0

        for (let i = nums.length - 1; i >= 0; i--) {
            const skip = next
            const rob = nums[i] + nextNext
            const best = Math.max(skip, rob)

            nextNext = next
            next = best
        }
        return next


    }
}
