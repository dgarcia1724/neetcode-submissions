class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const res = [];

        for (let s of strs) {
            // Store each string as: length#string
            // Example: "hello" → "5#hello"
            res.push(String(s.length) + '#' + s);
        }

        // Combine everything into one string
        return res.join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        let i = 0;

        while (i < str.length) {
            // Find the '#' that separates the length from the string
            let j = i;
            while (str[j] !== "#") {
                j++;
            }

            // Get the length before '#'
            let length = Number(str.slice(i, j));

            // Move i past '#', to the beginning of the actual string
            i = j + 1;

            // j becomes the ending position of the string
            j = i + length;

            // Extract the string and add it to the result
            res.push(str.slice(i, j));

            // Move i to the beginning of the next encoded string
            i = j;
        }

        return res;
    }
}