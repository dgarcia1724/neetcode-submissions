class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        k = nums.length - k; // kth largest = index n-k once sorted. k=1 → last index.

        // Same partition as quicksort
        const partition = (left, right) => {
            let pivot = nums[right];
            let p = left; // boundary pointer: everything before p is <= pivot

            for (let i = left; i < right; i++) { // compare all elements before pivot (nums[right]), to find its final index.
                if (nums[i] <= pivot) {
                    [nums[p], nums[i]] = [nums[i], nums[p]];
                    p++;
                }
            }
            [nums[p], nums[right]] = [nums[right], nums[p]];
            return p; // pivot's final index
        };

        const quickSelect = (left, right) => {
            const p = partition(left, right);

            if (p > k) return quickSelect(left, p - 1);  // target is on the small side
            if (p < k) return quickSelect(p + 1, right); // target is on the large side
            return nums[p];                              // p === k, found it
        };

        return quickSelect(0, nums.length - 1);
    }
}