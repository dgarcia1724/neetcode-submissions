class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let res = 0, count = 0;

        for (let num of nums) {
            if (count === 0) res = num 

            count += num === res ? 1 : -1;

        }
        return res;
    }
}
