class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {


        const partition = (left, right) => {
            let pivot = nums[right]
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


        const quickSort = (left, right) => {
            if (left >= right) return

            const p = partition(left, right)
            quickSort(left, p-1)
            quickSort(p+1, right)

            

        }

        quickSort(0, nums.length - 1)
        return nums



    }
}
