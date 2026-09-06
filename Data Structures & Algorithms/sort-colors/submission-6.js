class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let l = 0, r = nums.length - 1;
        let i = 0;

        while (i <= r) {
            if (nums[i] === 0) {
                [nums[l], nums[i]] = [nums[i], nums[l]]
                l++
            }

            if (nums[i] == 2) {
                [nums[i], nums[r]] = [nums[r], nums[i]]
                r--
                i--
            }
            i++
        }

        return nums
    }
}
