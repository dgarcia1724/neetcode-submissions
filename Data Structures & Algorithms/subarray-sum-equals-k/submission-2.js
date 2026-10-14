class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let res = 0;

        let currSum = 0
        let prefixSum = new Map([[0,1]])

        for (const n of nums) {
            currSum += n
            const diff = currSum - k;

            if (prefixSum.has(diff)) {
                res += prefixSum.get(diff) || 0
            }

            prefixSum.set(currSum, (prefixSum.get(currSum) || 0) + 1)
        }
        return res
    }
}
