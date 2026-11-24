class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        count = {}


        #  res for longest
        res = 0

        l = 0
        for r in range(len(s)):
            # update count for this char 
            count[s[r]] = 1 + count.get(s[r], 0)


            # check if valid
            # if replacements needed <= k, then valid
            #--- turn this into a while loop to get rid of leftmost, until valid
            #--- we get the replacements needed by (r-l+1) - max(values) in count bc that is longest repeating char
            while (r-l+1) - max(count.values()) > k:
                count[s[l]] -= 1
                l += 1

            res = max(res, r-l+1)
        

        return res

        