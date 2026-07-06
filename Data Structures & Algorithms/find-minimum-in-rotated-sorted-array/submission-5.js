class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let res = nums[0]
        let l=0, r=nums.length-1

        while (l<=r) {
            if (nums[l] < nums[r]) {
                res = Math.min(res, nums[l])
                break
            }
            let m = l + Math.floor((r-l)/2)
            res = Math.min(res, nums[m])

            if (nums[l] <= nums[m]) {
                l = m + 1
            } else {
                r = m -1
            }
        }
        return res
    }
}
