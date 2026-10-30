class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const cache = new Map() // i -> money

        const dfs = (i) => {
            if (i >= nums.length) {
                return 0
            }

            if (cache.has(i)) return cache.get(i)

            const rob = nums[i] + dfs(i+2)
            const skip = dfs(i+1)

            const best = Math.max(rob, skip)
            cache.set(i, best)

            return best
        }

        return dfs(0)

    }
}
