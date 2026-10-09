class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        // "We're looking for elements appearing more than n / 3 times.
        // There can be at most two, because three would exceed n elements."
            // Think: “Each answer takes more than a third of the array.”
            // Three answers would take more than three thirds—more than 100%. Impossible.
            // So at most two numbers can qualify.
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
            let frequency = 0;

            for (const num of nums) {
                if (num === key) {
                    frequency++;
                }
            }

            if (frequency > Math.floor(nums.length / 3)) {
                res.push(key);
            }
        }

        // "The candidate-selection pass visits all n elements.
        // Each update does constant work because the map contains
        // at most three entries before cancellation.
        //
        // Then I verify at most two candidates. Each verification
        // scans all n elements, so that's at most two additional
        // full scans: n + 2n = 3n operations overall.
        // Big-O drops constant factors, so the total time is O(n).
        //
        // Extra space is O(1): the maps hold at most three entries,
        // verification uses a counter instead of creating an array,
        // and the result contains at most two elements."
        return res;
    }
}