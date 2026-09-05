class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {

        const merge = (left, right) => {
            let i = 0, j= 0;
            const newArr = [] 

            while (i < left.length && j < right.length) {
                if (left[i] < right[j]) {
                    newArr.push(left[i])
                    i++;
                } else {
                    newArr.push(right[j])
                    j++
                }
            }

            return newArr.concat(left.slice(i)).concat(right.slice(j));

        }


        const mergeSort = (arr) => {
            if (arr.length <= 1) return arr;

            const m = Math.floor(arr.length / 2)
            const left = mergeSort(arr.slice(0, m))
            const right = mergeSort(arr.slice(m))
            return merge(left, right)
        }

        return mergeSort(nums)

    }
}
