class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = ""
        for (const s of strs) {
            res += String(s.length) + "#" + s
        }
        return res
        
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = []
        let i = 0

        while (i < str.length) {
            // get int
            let j = i
            while (str[j] != "#") {
                j ++
            }
            let num = Number(str.slice(i,j))
            i = j+ 1
            j = i + num
            let word = str.slice(i, j)
            res.push(word)
            i=j
        }
        return res
    }
}
