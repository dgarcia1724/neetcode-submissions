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

            // Walk everything except the pivot (which sits at `right`)
            for (let i = left; i < right; i++) {
                // Found a value belonging on the "small" side
                if (nums[i] <= pivot) {
                    // Swap it into position p, the boundary of the small section
                    [nums[p], nums[i]] = [nums[i], nums[p]];
                    p++; // boundary moves right — one more element is now placed
                }
            }
            // Everything left of p is <= pivot, everything from p to right-1 is > pivot.
            // So p is exactly where the pivot belongs — swap it in from the end.
            [nums[p], nums[right]] = [nums[right], nums[p]];
            // nums[p] is now in its FINAL sorted position, which is what makes quickselect work.

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