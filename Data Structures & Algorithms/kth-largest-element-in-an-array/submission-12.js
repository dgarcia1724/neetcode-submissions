class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const target = nums.length - k

        function partition(left, right) {
            const pivot = nums[right]
            let p = left
            for (let i = left; i < right; i++) {
                if (nums[i] <= pivot) {
                    [nums[p], nums[i]] = [nums[i], nums[p]]
                    p++
                }
            } 

            [nums[p], nums[right]] = [nums[right], nums[p]]
            return p
        }



        function quickSelect(left, right) {
            const p = partition(left, right)

            if (target === p) return nums[p]
            if (target < p) {
                return quickSelect(left, p - 1)
            } else {
                return quickSelect(p+1, right)
            }


        }

        return quickSelect(0, nums.length -1)
    }
}
