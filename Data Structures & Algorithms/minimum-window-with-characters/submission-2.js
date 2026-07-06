class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const tCount = {};
        for (const c of t) tCount[c] = (tCount[c] || 0) + 1;

        const window = {};
        let have = 0, need = Object.entries(tCount).length;
        let l = 0, res = "", length = Infinity;

        for (let r = 0; r < s.length; r++) {
            window[s[r]] = (window[s[r]] || 0) + 1;

            if (tCount[s[r]] && window[s[r]] === tCount[s[r]]) {
                have++;
            }

            while (have === need) {
                if (r - l + 1 < length) {
                    length = r - l + 1;
                    res = s.slice(l, r + 1);
                }

                window[s[l]]--;
                if (tCount[s[l]] && window[s[l]] < tCount[s[l]]) {
                    have--;
                }
                l++;
            }
        }
        return res;
    }
}
