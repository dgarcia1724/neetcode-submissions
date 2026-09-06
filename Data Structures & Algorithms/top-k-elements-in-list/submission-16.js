class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = new Map();
        const freq = Array.from({length: nums.length + 1}, () => [])

        for (const n of nums) {
            count.set(n, (count.get(n) || 0) + 1)
        }

        for (const [num, app] of count) {
            freq[app].push(num)
        }

        const res = []
        for (let i = freq.length - 1; i>0; i--) {
            for (const num of freq[i]) {
                res.push(num)
                if (res.length === k) return res
            }
        }
    }
}
