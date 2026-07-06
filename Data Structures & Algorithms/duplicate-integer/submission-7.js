class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const visited = new Set();

        // check if inside, then true
        // add to visited
        for (const n of nums) {
            if (visited.has(n)) {
                return true
            }
            visited.add(n)
        }
        return false
    }
}
