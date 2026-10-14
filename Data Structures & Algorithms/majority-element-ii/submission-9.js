class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        // first get the candidates 

        // do this with constant space
        let count = new Map()

        // cycle through elements, add to map
        // --- when there are more than 2, then eliminate by subtracting all by 1 & keep survivors
        for (const n of nums) {
            count.set(n, (count.get(n) || 0) + 1)

            if (count.size > 2) {
                const newCount = new Map()
                for (const [key,val] of count) {
                    if (val > 1) {
                        newCount.set(key, val - 1)
                    }
                }
                count = newCount
            }
        }

        // verify
        let res = []
        for (const [key] of count) {
            let freq = 0

            for (const n of nums) {
                if (n === key) freq++
            }

            if (freq > Math.floor(nums.length / 3)) {
                res.push(key)
            }
        }
        return res
    }
}
