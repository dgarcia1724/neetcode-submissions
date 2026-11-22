class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        # Use a sliding window with a set to track unique characters
        charSet = set()
        l = 0
        res = 0

        # Expand the window by moving the right pointer
        for r in range(len(s)):

            # Shrink the window until the duplicate is removed
            while s[r] in charSet:
                charSet.remove(s[l])
                l += 1

            # Add the current character to the window
            charSet.add(s[r])

            # Update the longest valid substring length
            res = max(res, r - l + 1)

        return res

# Time: O(n) — each character is added and removed at most once
# Space: O(m) — set stores at most m unique characters
# n = length of the string
# m = total number of unique characters in the string