class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // "I'll sort the array so I can use two pointers
        // and skip duplicates."
        nums.sort((a, b) => a - b);

        const res = [];

        for (let i = 0; i < nums.length; i++) {
            // "I'll fix one number and find two others that sum to its negative."

            // "If the fixed number is positive, all remaining numbers
            // are positive too, so no triplet can sum to zero."
            if (nums[i] > 0) break;

            // "I'll skip repeated fixed values to avoid duplicate triplets."
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let l = i + 1;
            let r = nums.length - 1;

            while (l < r) {
                const totalSum = nums[i] + nums[l] + nums[r];

                if (totalSum === 0) {
                    res.push([nums[i], nums[l], nums[r]]);

                    // "After a match, I'll move both pointers.
                    // Each distinct left value has only one matching right value."
                    l++;
                    r--;

                    // "I'll skip repeated left values so I don't
                    // return the same triplet again."
                    while (l < r && nums[l] === nums[l - 1]) l++;
                } else if (totalSum > 0) {
                    // "The sum is too large, so I'll move right
                    // to a smaller number."
                    r--;
                } else {
                    // "The sum is too small, so I'll move left
                    // to a larger number."
                    l++;
                }
            }
        }

        return res;
    }
}

// "Time is O(n²): sorting takes O(n log n), and for each fixed
// number, the two pointers scan at most O(n) elements.
//
// The two-pointer logic uses O(1) extra space.
// Sorting space depends on the JavaScript engine—commonly O(n).
// The output uses O(t) space for t triplets, which can be O(n²). 
// ---- For space O(n**2) Each choice of two numbers determines the third needed to reach zero. There are O(n²) pairs, so there are at most O(n²) unique triplets.

//
// This solution modifies the input by sorting it."