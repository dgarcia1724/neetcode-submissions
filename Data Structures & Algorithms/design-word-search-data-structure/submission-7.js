class TrieNode {
    constructor() {
        this.children = {};
        this.word = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let cur = this.root;

        for (const c of word) {
            if (!(c in cur.children)) cur.children[c] = new TrieNode()
            cur = cur.children[c]
        }
        cur.word = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
    const dfs = (i, cur) => {
        if (i === word.length) return cur.word;

        const char = word[i];

        if (char === ".") {
            // try all children
            for (const child of Object.keys(cur.children)) {
                if (dfs(i + 1, cur.children[child])) {
                    return true; // any path works
                }
            }
            return false; // no path worked
        }

        if (!(char in cur.children)) return false;

        return dfs(i + 1, cur.children[char]);
    };

    return dfs(0, this.root);
}
}
