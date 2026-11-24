class Solution:
    def search(self, nums: List[int], target: int) -> int:
        l, r = 0, len(nums) - 1

        while l <= r:
            m = l + (r - l) // 2

            if nums[m] == target:
                return m

            # Check if the right half is sorted.
            if nums[m] < nums[r]:

                # If target is within the sorted right half,
                # eliminate the left half.
                if nums[m] < target <= nums[r]:
                    l = m + 1
                else:
                    r = m - 1

            # Otherwise, the left half is sorted.
            else:

                # If target is within the sorted left half,
                # eliminate the right half.
                if nums[l] <= target < nums[m]:
                    r = m - 1
                else:
                    l = m + 1

        return -1

# Time: O(log n) — eliminate roughly half the search space each iteration.
# Space: O(1) — only three pointer variables.