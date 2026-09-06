class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {

        const partition = (l,r) => {
            const pivot = nums[r]
            let p = l

            for (let i=l; i<r; i++) {

                if (nums[i] <= pivot) {
                    [nums[i], nums[p]] = [nums[p], nums[i]]
                    p++
                }
            }

            [nums[p], nums[r]] = [nums[r], nums[p]]
            return p
        }


        const quickSort = (l,r) => {
            if (l>= r) return 

            const p = partition(l,r)
            const left = quickSort(l, p-1)
            const right = quickSort(p+1, r)
        }

        quickSort(0, nums.length-1)
        return nums

    }
}
