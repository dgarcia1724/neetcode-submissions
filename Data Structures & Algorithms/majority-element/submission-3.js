class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let res = 0, count = 0;

        for (const num of nums) {
            if (count === 0) {
                res = num
            }

            if (res === num) {
                count++
            } else {
                count--
            }
        }

        return res;
    }
}
