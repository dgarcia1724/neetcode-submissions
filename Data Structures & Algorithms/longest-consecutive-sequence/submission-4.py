class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        # Use a hash set for O(1) average lookup
        numSet = set(nums)
        longest = 0

        for num in numSet:
            # Only start a sequence if there's no smaller consecutive number
            if (num - 1) not in numSet:
                length = 1

                # Count consecutive numbers moving forward
                while (num + length) in numSet:
                    length += 1

                # Update the longest sequence found
                longest = max(length, longest)

        return longest

        # Time: O(n) — each unique number is visited at most twice
        # Space: O(n) — hash set stores unique numbers