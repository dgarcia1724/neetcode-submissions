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
            j++
            i = j+num
            let word = str.slice(j, i)
            res.push(word)
        }
        return res
    }
}
