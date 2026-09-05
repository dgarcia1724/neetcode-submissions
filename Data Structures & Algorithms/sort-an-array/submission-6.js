class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        const quickSort = (arr) => {
            if (arr.length <= 1) return arr;

            const pivot = arr[arr.length - 1];        // arr[-1]
            const rest = arr.slice(0, arr.length-1);            // arr[:-1]

            const left = rest.filter(x => x <= pivot);
            const right = rest.filter(x => x > pivot);

            return [...quickSort(left), pivot, ...quickSort(right)];
        };

        return quickSort(nums);
    }
}