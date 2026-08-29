class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let seen = new Set()
        for (const n of nums) {
            if (seen.has(n)) return true
            seen.add(n)
        }
        return false
    }
}
