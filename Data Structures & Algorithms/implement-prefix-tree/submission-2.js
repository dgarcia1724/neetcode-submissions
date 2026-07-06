class TrieNode {
    constructor() {
        this.children = {}; // map from char → TrieNode
        this.word = false;  // is this the end of a word
    }
}

class PrefixTree {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let cur = this.root;
        for (const c of word) {
            if (!(c in cur.children)) {
                cur.children[c] = new TrieNode();
            }
            cur = cur.children[c];
        }
        cur.word = true;
    }

    search(word) {
        let cur = this.root;
        for (const c of word) {
            if (!cur.children[c]) return false;
            cur = cur.children[c];
        }
        return cur.word;
    }

    startsWith(prefix) {
        let cur = this.root;
        for (const c of prefix) {
            if (!cur.children[c]) return false;
            cur = cur.children[c];
        }
        return true;
    }
}

// Usage:
// const trie = new Trie();
// trie.insert("apple");
// trie.search("apple");      // true
// trie.startsWith("app");    // true