class Solution {
    /**
     * @param {string[][]} accounts
     * @return {string[][]}
     */
    accountsMerge(accounts) {
        const uf = new UnionFind();
        const emailToName = new Map();

        // "I'll connect all emails within each account to its first email."
        for (const [name, firstEmail, ...otherEmails] of accounts) {
            emailToName.set(firstEmail, name);

            for (const email of otherEmails) {
                emailToName.set(email, name);
                uf.union(firstEmail, email);
            }
        }

        // "Shared emails connect accounts transitively.
        // I'll group each unique email by its final root."
        const groups = new Map();

        for (const email of emailToName.keys()) {
            const root = uf.find(email);

            if (!groups.has(root)) {
                groups.set(root, []);
            }

            groups.get(root).push(email);
        }

        const result = [];

        // "Each group becomes one merged account.
        // I'll sort its emails and prepend the owner's name."
        for (const [root, emails] of groups) {
            emails.sort();
            result.push([emailToName.get(root), ...emails]);
        }

        return result;
    }
}

class UnionFind {
    constructor() {
        // Node → immediate parent. Missing means it's its own root.
        this.parents = new Map();

        // Root → height estimate, starting at 1.
        this.rank = new Map();
    }

    find(x) {
        const parent = this.parents.get(x) ?? x;

        if (x !== parent) {
            // "I'll use path compression so future lookups
            // go directly to the root."
            const root = this.find(parent);
            this.parents.set(x, root);
            return root;
        }

        return x;
    }

    union(a, b) {
        const rootA = this.find(a);
        const rootB = this.find(b);

        // "If the roots match, these emails are already connected."
        if (rootA === rootB) return false;

        const rankA = this.rank.get(rootA) ?? 1;
        const rankB = this.rank.get(rootB) ?? 1;

        // "I'll attach the lower-rank tree under the higher-rank tree."
        if (rankA > rankB) {
            this.parents.set(rootB, rootA);
        } else if (rankB > rankA) {
            this.parents.set(rootA, rootB);
        } else {
            // "For equal ranks, either root can become the parent.
            // I'll increase the chosen root's rank."
            this.parents.set(rootA, rootB);
            this.rank.set(rootB, rankB + 1);
        }

        return true;
    }
}