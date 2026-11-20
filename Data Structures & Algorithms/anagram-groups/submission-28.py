class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        # Hash map: character frequency tuple -> list of anagrams
        res = defaultdict(list)

        for s in strs:
            # Count frequencies of the 26 lowercase letters
            count = [0] * 26

            for c in s:
                # ord(c) returns the Unicode code point
                # Subtract ord('a') to map 'a'-'z' to indices 0-25
                count[ord(c) - ord('a')] += 1

            # Convert to tuple because lists aren't hashable
            # Anagrams share the same frequency tuple
            res[tuple(count)].append(s)

        return list(res.values())

        # Time: O(n * k), n = strings, k = max string length
        # Space: O(n * k) including the grouped output