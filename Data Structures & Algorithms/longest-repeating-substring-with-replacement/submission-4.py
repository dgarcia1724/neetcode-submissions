class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
# For those who are struggling to understand the optimisation with maxf,
# here is how i understood it:
#
# For a substring to be valid, we need window_length - maxf <= k.
# Here, maxf is the frequency of the most common character in the current
# window. The difference window_length - maxf tells us how many characters
# we'd need to change to make the whole window the same character.
#
# ⭐⭐⭐The biggest valid substring we can get is of size maxf + k.⭐⭐⭐⭐
# So, the larger maxf is, the better. If maxf doesn't change or goes down,
# our potential best answer doesn't change. We don't need to update maxf
# in this case.
#
# On the other hand, if maxf goes up, it means we've found a character
# in the current window that appears more often than in previous windows.
# This means we might be able to get a longer valid substring,
# so we update maxf.

        # Track the frequency of each character in the window
        count = {}
        res = 0

        l = 0
        # maxf tracks the highest frequency of any single character seen
        # in a window so far. We don't decrease it when shrinking because
        # we only care about finding a longer valid substring.
        maxf = 0

        # Expand the sliding window using the right pointer
        for r in range(len(s)):
            count[s[r]] = 1 + count.get(s[r], 0)

            # Track the highest character frequency seen so far
            maxf = max(maxf, count[s[r]])

            # Window length - max frequency = replacements needed
            #---- If window length is huge, then we need so many replacements 😱😱😱
            # replacements needed must be <= k bc k is how many replacements we can make, 
            # ----- If replacements exceed k, shrink the window from the left ⭐⭐bc max valid substring is
            # ----- maxF + k⭐⭐⭐
            while not (r - l + 1) - maxf <= k:
                count[s[l]] -= 1
                l += 1

            # Update the longest achievable substring length
            res = max(res, r - l + 1)

        return res

# Time: O(n) — each pointer moves forward at most n times,
# and each window update takes O(1) time.
# Space: O(1) — hash map stores at most 26 uppercase letters