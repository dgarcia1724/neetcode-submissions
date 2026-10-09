class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        // select candidates 
        let count = new Map()

        // --- all elements that appear more than 1/3
        for (const n of nums) {
            // add count to hashmap
            count.set(n, (count.get(n) || 0) +1)


            // if hashmap > 2
            // ---- -1 from each & the top 2 should survive
            if (count.size > 2) {
                let newCount = new Map()

                for (const [key,val] of count) {
                    if (val > 1) {
                        newCount.set(key, val-1)
                    }
                }
                count = newCount
            }
        }

        let res = []
        for (const [key] of count.entries()) {
            let freq = 0

            for (const n of nums) {
                if (n === key) freq++
            }

            if (freq > Math.floor(nums.length / 3)) {
                res.push(key)
            }
        }
        return res
        




        // verify & return
    }
}
