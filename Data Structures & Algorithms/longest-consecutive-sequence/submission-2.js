class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // Put all numbers in a Set for O(1) lookups (also removes duplicates)
        const numSet = new Set(nums);
        let longest = 0;

        // Loop over the Set, not nums, so duplicates don't cause repeated work
        for (let num of numSet) {
            // Only start counting if num is the START of a sequence (no num - 1 exists)
            // This ensures each sequence is counted once -> O(n) overall
            if (!numSet.has(num - 1)) {
                let length = 1;

                // Count up while the next consecutive number exists
                while (numSet.has(num + length)) {
                    length++;
                }

                // Track the longest sequence seen so far
                longest = Math.max(longest, length);
            }
        }

        // Time: O(n) - each number is visited at most twice (outer loop + one while loop)
        // Space: O(n) - for the Set
        return longest;
    }
}