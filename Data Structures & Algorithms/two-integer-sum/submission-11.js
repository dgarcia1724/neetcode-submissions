class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numToIndex = {}

        for (let i = 0; i < nums.length; i++) {
            let diff = target - nums[i]
            if (Object.hasOwn(numToIndex, diff)) {
                return [i, numToIndex[diff]]
            }
            numToIndex[nums[i]] = i
        }
    }
}
