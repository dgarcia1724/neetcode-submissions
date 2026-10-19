class Solution {
    /**
     * @param {string[][]} accounts
     * @return {string[][]}
     */
    accountsMerge(accounts) {
        const uf = new UnionFind();
        const emailToName = new Map();

        // "I'll use emails as nodes. Emails in the same account
        // belong to the same person, so I'll connect them."
        for (const [name, firstEmail, ...otherEmails] of accounts) {
            // "I'll save the owner's name for each email."
            emailToName.set(firstEmail, name);

            for (const email of otherEmails) {
                emailToName.set(email, name);

                // "Connecting each email to the first email puts
                // all emails in this account into the same group."
                uf.union(firstEmail, email);
            }
        }

        // "If two accounts share an email, their groups are now connected.
        // I'll collect all emails that have the same root."
        const groups = new Map();

        // "The map contains each email only once, so there are no duplicates."
        for (const email of emailToName.keys()) {
            const root = uf.find(email);

            // "I'll create an array when I first encounter this group."
            if (!groups.has(root)) {
                groups.set(root, []);
            }

            groups.get(root).push(email);
        }

        const result = [];

        // "I'll turn each group into a merged account."
        for (const [root, emails] of groups) {
            // "The emails must be sorted."
            emails.sort();

            // "The root is an email in this group, so I can use it
            // to look up the owner's name and place it first."
            result.push([emailToName.get(root), ...emails]);
        }

        return result;
    }
}
 
// Time: O(T · α(U) + U log U), where T is total email occurrences
// and U is unique emails. α(U) is effectively constant.
// Space: O(U) for Union Find, email mappings, and grouped emails.

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