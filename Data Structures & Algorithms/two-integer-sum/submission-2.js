class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numToIndex = {} // number : index

        for (let i =0; i < nums.length; i++) {
            let val = nums[i]
            const diff = target - val;
            if (diff in numToIndex) {
                return [numToIndex[diff], i];
            }

            numToIndex[val] = i;
        }




    }
}
