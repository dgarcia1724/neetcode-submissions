class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        const hashset = new Set()

        for (const n of nums) {
            if (hashset.has(n)) return n

            hashset.add(n)
        }
    }
}
