class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) {
            return false
        }

        const tCount = {}
        const sCount = {}

        for (let i = 0; i < s.length; i++) {
            tCount[t[i]] = (tCount[t[i]] || 0) + 1;
            sCount[s[i]] = (sCount[s[i]] || 0) + 1;
        }

        for (const key of Object.keys(sCount)) {
            if (sCount[key] != tCount[key]) {
                return false;
            }
        }
        return true;
    }
}
