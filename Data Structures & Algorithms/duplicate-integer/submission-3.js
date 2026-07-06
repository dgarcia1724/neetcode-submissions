class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let hashset = new Set();
        // check if has duplicate, then add to hashset
        for (const n of nums) {
            if (hashset.has(n)) {
                return true;
            }
            hashset.add(n)
        }
        return false;

    }
}
