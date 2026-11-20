class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        # dict k,v. tuple of frequency -> []

        res = collections.defaultdict(list)

        # go through strs
        for s in strs:
        # create tuple / freq array
            count = [0] * 26

        # add all chars to freq array
            for c in s:
                # ord gives unicode code point of char
                count[ord(c) - ord("a")] += 1

        # convert arr to tuple & add to dict
            res[tuple(count)].append(s)


        return list(res.values())
        