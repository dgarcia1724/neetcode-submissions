class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // I'll sort the array so I can use two pointers and skip duplicates.
        nums.sort((a, b) => a - b);
        const res = [];

        // Fix one number, then find two others that bring the sum to zero.
        for (let i = 0; i < nums.length; i++) {
            // If this number is positive, all remaining numbers are too.
            if (nums[i] > 0) break;

            // Skip repeated first numbers to avoid duplicate triplets.
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            // Search after i so we use three different indices.
            let l = i + 1;
            let r = nums.length - 1;

            while (l < r) {
                const sum = nums[i] + nums[l] + nums[r];

                if (sum > 0) {
                    // The sum is too large, so move toward a smaller number.
                    r--;
                } else if (sum < 0) {
                    // The sum is too small, so move toward a larger number.
                    l++;
                } else {
                    // Found a valid triplet. Save it and move both pointers.
                    res.push([nums[i], nums[l], nums[r]]);
                    l++;
                    r--;

                    // Skip repeated left values to avoid the same triplet.
                    // With nums[i] fixed, the same left value needs the same right value.
                    while (l < r && nums[l] === nums[l - 1]) {
                        l++;
                    }
                }
            }
        }

        return res;
    }
}

// Time: O(n²) — for each fixed number, the pointers scan in O(n).
// Auxiliary space: O(1) for the pointer search, plus the sorting
// implementation's workspace (commonly O(log n) to O(n)).
// Output space: O(k), where k is the number of returned triplets.