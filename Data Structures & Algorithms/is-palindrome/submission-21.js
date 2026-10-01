class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // I'll use two pointers, starting at opposite ends.
        let l = 0, r = s.length - 1;

        while (l < r) {
            // Skip non-alphanumeric characters on either side.
            while (l < r && !this.alphaNum(s[l])) l++;
            while (l < r && !this.alphaNum(s[r])) r--;

            // Compare ignoring case. A mismatch means it's not a palindrome.
            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            }

            // These characters match, so move inward.
            l++;
            r--;
        }

        // All relevant pairs matched.
        return true;
    }

    alphaNum(c) {
        // Check whether the character is an ASCII letter or digit.
        return (
            (c >= "A" && c <= "Z") ||
            (c >= "a" && c <= "z") ||
            (c >= "0" && c <= "9")
        );
    }
}

// Time: O(n) — the pointers only move inward, visiting each character
// at most once. The nested loops don't restart the traversal.
// Extra space: O(1) — we use two pointers and no growing data structures.