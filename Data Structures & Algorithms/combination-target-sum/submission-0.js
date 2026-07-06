class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let res = [];
        let comb = [];

        nums.sort((a,b) => (a-b))

        const dfs = (i, total) => {
            if (total == target) {
                res.push([...comb]);
                return;
            }
            if (i >= nums.length) return;
            if (total > target) return;

            comb.push(nums[i])
            dfs(i, total + nums[i])
            comb.pop()
            dfs(i+1, total)
        }
        dfs(0,0)
        return res
    }
}
