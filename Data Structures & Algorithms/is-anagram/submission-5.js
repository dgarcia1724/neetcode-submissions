class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false;
        const tString = t.split("").sort().join('')
        const sString = s.split("").sort().join('')
        return tString == sString;
    }
}
