class TrieNode {
    constructor() {
        this.word = false;
        this.children = {};
        this.refs = 0; // number of words passing through this node
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    addWord(word) {
        let cur = this.root;
        for (const c of word) {
            if (!cur.children[c]) cur.children[c] = new TrieNode();
            cur = cur.children[c];
            cur.refs += 1;
        }
        cur.word = true;
    }

    removeWord(word) {
        let cur = this.root;
        for (const c of word) {
            cur = cur.children[c];
            cur.refs -= 1;
        }
        cur.word = false;
    }
}

class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        const ROWS = board.length;
        const COLS = board[0].length;

        // Build trie
        const trie = new Trie();
        for (const word of words) {
            trie.addWord(word);
        }

        const res = [];
        const visited = new Set();

        const dfs = (r, c, cur, word) => {
            if (
                r < 0 || r >= ROWS ||
                c < 0 || c >= COLS ||
                visited.has(`${r},${c}`) ||
                !(board[r][c] in cur.children) ||
                cur.children[board[r][c]].refs === 0
            ) return;

            visited.add(`${r},${c}`);
            word += board[r][c];
            cur = cur.children[board[r][c]];

            if (cur.word) {
                res.push(word);
                trie.removeWord(word); // avoids duplicate results
            }

            dfs(r + 1, c, cur, word);
            dfs(r - 1, c, cur, word);
            dfs(r, c + 1, cur, word);
            dfs(r, c - 1, cur, word);

            visited.delete(`${r},${c}`);
        };

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                dfs(r, c, trie.root, "");
            }
        }

        return res;
    }
}