class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numToIndex = {}

        for (let i =0; i<nums.length; i++) {
            const val = nums[i];
            const diff = target - val;

            if (diff in numToIndex) {
                return [numToIndex[diff], i]
            }
            numToIndex[val] = i;
        }

    }
}
