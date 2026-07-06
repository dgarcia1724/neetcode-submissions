class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numToIndex = {} // number : index

        for (let i =0; i < nums.length; i++) {
            const diff = target - nums[i];
            if (diff in numToIndex) {
                return [numToIndex[diff], i];
            }

            numToIndex[nums[i]] = i;
        }




    }
}
