class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l = 0, r = numbers.length - 1;

        let currSum = 0
        while (l < r) {
            currSum = numbers[l] + numbers[r]

            if (currSum > target) {
                r--
            } else if (currSum < target) {
                l++
            } else {
                return [l+1, r+1]
            }

        }
    }
}
