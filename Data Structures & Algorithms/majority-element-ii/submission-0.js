class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        // "We're looking for elements appearing more than n / 3 times.
        // There can be at most two, because three would exceed n elements."
        let count = new Map();

        // "I'll use a generalized Boyer–Moore voting algorithm
        // to identify up to two possible majority candidates."
        for (const num of nums) {
            count.set(num, (count.get(num) || 0) + 1);

            // "Whenever we have three distinct candidates, I'll cancel
            // one occurrence of each. An element appearing more than
            // n / 3 times is guaranteed to survive this cancellation."
            if (count.size > 2) {
                const newCount = new Map();

                for (const [key, value] of count.entries()) {
                    // "These counts represent uncanceled votes,
                    // not the elements' actual frequencies."
                    // Remove candidates whose counts become zero.
                    if (value > 1) {
                        newCount.set(key, value - 1);
                    }
                }

                count = newCount;
            }
        }

        // "Surviving candidates aren't necessarily majority elements,
        // so I'll verify their actual frequencies in the original array."
        const res = [];

        for (const [key] of count.entries()) {
            const frequency = nums.filter((num) => num === key).length;

            if (frequency > Math.floor(nums.length / 3)) {
                res.push(key);
            }
        }

        // "Time is O(n), since there are at most two candidates to verify.
        // As written, space is O(n) because filter creates a new array.
        // I'd use a counting loop instead of filter for O(1) extra space."
        return res;
    }
}