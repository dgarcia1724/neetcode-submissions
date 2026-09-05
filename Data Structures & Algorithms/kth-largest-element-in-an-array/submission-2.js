class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        k = nums.length - k; // Easier way to right kth largest. Ex) k= 1, so last element, etc.

        const quickSelect = (left, right) => {
            let pivot = nums[right];
            let p = left; // p is for pointer

            for (let i = left; i < right; i++) {
                if (nums[i] <= pivot) {
                    [nums[p], nums[i]] = [nums[i], nums[p]];
                    p++;
                }
            }
            [nums[p], nums[right]] = [nums[right], nums[p]];

            if (p > k) {
                return quickSelect(left, p - 1);
            } else if (p < k) {
                return quickSelect(p + 1, right);
            } else {
                return nums[p];
            }
        };

        return quickSelect(0, nums.length - 1);
    }
}