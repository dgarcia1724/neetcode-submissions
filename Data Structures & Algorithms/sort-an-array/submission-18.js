class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {

        function partition(left, right) {
            const pivot = nums[right]
            let p = left
            for (let i = left; i < right; i++) {
                if (nums[i] <= pivot) {
                    [nums[i], nums[p]] = [nums[p], nums[i]]
                    p++
                }
            }

            [nums[p], nums[right]] = [nums[right], nums[p]]
            return p
        }

        function quickSort(left, right) {
            if (left >= right) return 

            let p = partition(left, right)
            quickSort(left, p-1)
            quickSort(p+1, right)
        }

        quickSort(0, nums.length - 1)

        return nums
    }
}
