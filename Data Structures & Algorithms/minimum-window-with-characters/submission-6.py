class Solution:
    def minWindow(self, s: str, t: str) -> str:
        if t == "":
            return ""
        
        tCount = {}
        window = {}
        for c in t:
            tCount[c] = 1 + tCount.get(c, 0)
        
        have, need = 0, len(tCount)

        maxLength = float("inf")
        res = [-1, -1]

        l = 0
        for r in range(len(s)):
            char = s[r]
            window[char] = 1 + window.get(char, 0)

            # check if in tCount & if we now have enought, to increase have
            if char in tCount and tCount[char] == window[char]:
                have += 1
            

            while have == need:
                if (r-l+1) < maxLength:
                    maxLength = r-l + 1
                    res = [l, r]
                window[s[l]] -= 1
                if s[l] in tCount and tCount[s[l]] > window[s[l]]:
                    have -= 1
                l += 1
        
        if maxLength == float("inf"):
            return ""
        l,r = res
        return s[l:r+1]


        




        

        