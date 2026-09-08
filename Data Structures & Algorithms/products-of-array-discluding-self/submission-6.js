class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // run through it twice 
        const res = new Array(nums.length).fill(1)

        // 1st init [1,1,1] array 
        // --- 1st run: store product prefix 
        // --- 2nd run store product postfix 

        let prefix = 1
        for (let i = 0; i < nums.length; i++) {
            res[i] *= prefix
            prefix *= nums[i]
        }

        let postfix = 1
        for (let i = nums.length-1; i >= 0; i--) {
            res[i] *= postfix
            postfix *= nums[i]
        }

        return res
        
    }
}
