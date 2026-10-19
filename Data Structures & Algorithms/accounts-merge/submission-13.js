class Solution {
    /**
     * @param {string[][]} accounts
     * @return {string[][]}
     */
    accountsMerge(accounts) {
        const uf = new UnionFind() // merge the accountIndexes to share one root
        const emailToAccount = new Map()

        // go through all emails, skipping names for now
        for (let i =0; i < accounts.length; i++) {
            for (let j = 1; j < accounts[i].length; j++) {
                // 
                let email = accounts[i][j]
                if (emailToAccount.has(email)) {
                    uf.union(i, emailToAccount.get(email))
                } else {
                    emailToAccount.set(email, i)
                }
            }
        }

        // 
        const accountToEmails = new Map()
        for (const [email, accountIndex] of emailToAccount) {
            // find the root
            const root = uf.find(accountIndex)

            // we will use root & have array for all emails we will add
            if (!accountToEmails.get(root)) {
                accountToEmails.set(root, [])
            }

            accountToEmails.get(root).push(email)
        }

        let res = []
        for (const [accountIndex, emails] of accountToEmails) {
            let name = accounts[accountIndex][0]
            emails.sort()
            res.push([name, ...emails])
        }

        return res


    }
}

// Uses your existing UnionFind class with find() and union().
//
// Time: O(T · α(A) + U log U).
// Space: O(A + U).
// A = number of accounts, T = total email occurrences,
// U = number of unique emails. α(A) is effectively constant.

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