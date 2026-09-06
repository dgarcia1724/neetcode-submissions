class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        k = nums.length - k 

        const partition = (l,r) => {
            const pivot = nums[r]
            let p = l;

            for (let i = l; i < r; i++) {
                if (nums[i] <= pivot) {
                    [nums[p], nums[i]] = [nums[i], nums[p]]
                    p++
                }
            }
            [nums[r], nums[p]] = [nums[p], nums[r]]
            return p
        }




        const quickSelect = (l,r) => {
            const p = partition(l,r)

            if (p > k) return quickSelect(l,p-1)
            if (p < k) return quickSelect(p+1,r)
            return nums[p]
        }

        return quickSelect(0, nums.length-1)
    }
}
