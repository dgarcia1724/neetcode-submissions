class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        // Identical to your quickselect partition
        const partition = (left, right) => {
            let pivot = nums[right];
            let p = left; // boundary pointer: everything before p is <= pivot


            for (let i = left; i < right; i++) {
                if (nums[i] <= pivot) {
                    [nums[p], nums[i]] = [nums[i], nums[p]];
                    p++;
                }
            }
            [nums[p], nums[right]] = [nums[right], nums[p]];
            return p; // pivot's final index
        };


        const quickSort = (left, right) => {
            if (left >= right) return; // 0 or 1 element — nothing to do


            const p = partition(left, right);
            quickSort(left, p - 1);  // sort the small side
            quickSort(p + 1, right); // sort the large side (skip p, it's placed)
        };


        quickSort(0, nums.length - 1);
        return nums;
    }
}
