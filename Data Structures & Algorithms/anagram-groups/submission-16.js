class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const res = {}
        for (const s of strs) {
            const count = new Array(26).fill(0);
            for (const c of s) {
                count[c.charCodeAt(0) - "a".charCodeAt(0)] += 1
            } 
            (res[count] = res[count] || []).push(s);
            // res[count].push(s)
        }
        return Object.values(res)
    }
}
