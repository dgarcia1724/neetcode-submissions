class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let prefix = strs[0]
        for (let i = 1; i < strs.length; i++) {
            let currWord = strs[i]
            let j = 0
            while (j < Math.min(prefix.length, currWord.length)) {
                if (currWord[j] != prefix[j]) {
                    break
                }
                j++
            }
            prefix = prefix.slice(0,j)
        }
        return prefix
    }
}
