class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        // candidate selection up to 2
        let count = new Map()

        for (const n of nums) {
            // add number to count & update freq
            count.set(n, (count.get(n) || 0) + 1)

            // check if size > 2
            if (count.size > 2) {

            // subtract 1 from each & top 2 should survive
                let newCount = new Map()

                for (const [key,val] of count) {
                    if (val > 1) {
                        newCount.set(key, val-1)
                    }
                }
                count = newCount

            }


        }





        // verify
        let res =[]

        // go through 2 candidates
        for (const [key] of count.entries()) {
            let freq = 0

            for (const num of nums) {
                if (num == key) freq++
            }

            if (freq > Math.floor(nums.length / 3)) {
                res.push(key)
            }
        }


        // get count & check if greater than n//3 

        //  return 
        return res
    }
}
