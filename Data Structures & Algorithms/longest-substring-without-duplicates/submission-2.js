class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let res = 0
        let charSet = new Set()

        // sliding window 

        // go through each char & keep track of r & l
        let l = 0
        for (let r = 0; r < s.length; r++) {
            while (charSet.has(s[r])) {
                charSet.delete(s[l])
                l++
            }
            charSet.add(s[r])

            res = Math.max(res, r-l+1)
        }
        return res

        // if duplicate, keep eliminating leftmost value 

        // add max , r-l + 1

        // return res
    }
}
