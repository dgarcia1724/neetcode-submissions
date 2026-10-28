class TrieNode {
    constructor() {
        this.children = {}
        this.word = false
    }
}

class PrefixTree {
    constructor() {
        this.root = new TrieNode()

    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let curr = this.root
        for (const c of word) {
            if (!Object.hasOwn(curr, c)) {
                curr[c] = new TrieNode()
            }
            curr = curr[c]
        }
        curr.word = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let curr = this.root
        for (const c of word) {
            if (!Object.hasOwn(curr, c)) {
                return false
            }
            curr = curr[c]
        }
        return curr.word
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let curr = this.root
        for (const c of prefix) {
            if (!Object.hasOwn(curr, c)) {
                return false
            }
            curr = curr[c]
        }
        return true
    }
}
