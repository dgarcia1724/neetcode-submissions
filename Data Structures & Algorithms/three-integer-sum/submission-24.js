class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => a- b)

        let res = []


        // walk through each value in the array 
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) break

        // if val > 0, break 

        // if val same as prev, continue 
            if (i > 0 && nums[i] === nums[i-1]) {
                continue
            }
        // make 2 pointers to find 3 vals that add up to 0 
            let l = i + 1
            let r = nums.length - 1
            while (l < r) {
        // --- find 2 numbers that add up to target
                const totalSum = nums[i] + nums[l] + nums[r]
                if (totalSum === 0) {
                    res.push([nums[i], nums[l], nums[r]  ])
                    l++
                    r--
                    while (l < r && nums[l] === nums[l-1]) l++
                } else if (totalSum > 0) {
                    r--
                } else {
                    l++
                }
            }
        }

        // return
        return res
        
    }
}
