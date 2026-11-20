from collections import defaultdict

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        # "Anagrams must have the same length."
        if len(s) != len(t):
            return False

        # "I'll count each character's frequency in both strings.
        # defaultdict(int) starts missing counts at zero."
        countS = {}
        countT = defaultdict(int)

        for i in range(len(s)):
            # "Increment the count for each string's current character."
            countS[s[i]] = countS.get(s[i], 0) + 1
            countT[t[i]] += 1

        # "They're anagrams if every character has the same count."
        return countS == countT

# Time: O(n) average — count n characters and compare the dictionaries.
#
# Space: O(k) — store counts for k distinct characters.
# For lowercase English letters only, k <= 26, so space is O(1).