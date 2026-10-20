class Solution {
    /**
     * @param {string[][]} accounts
     * @return {string[][]}
     */
    accountsMerge(accounts) {
        let uf = new UnionFind()
        const emailToAccount = new Map()

        for (let i= 0; i < accounts.length; i++) {
            for (let j= 1; j < accounts[i].length; j++) {
                const email = accounts[i][j]
                if (emailToAccount.has(email)) {
                    uf.union(i, emailToAccount.get(email))
                } else {
                    emailToAccount.set(email, i)
                }
            }
        }

        let accountToEmails = new Map()
        for (const [email, account] of emailToAccount) {
            let root = uf.find(account)

            if (!accountToEmails.get(root)) {
                accountToEmails.set(root, [])
            }

            accountToEmails.get(root).push(email)
        }

        let res = []
        for (const [account, emails] of accountToEmails) {
            let name = accounts[account][0]

            emails.sort()
            res.push([name, ...emails])
        }
        return res
    }

}


class UnionFind {
    constructor() {
        this.parents = new Map()
        this.rank = new Map()
    }

    find(x) {
        let parent = this.parents.get(x) ?? x
        if (x !== parent) {
            let root = this.find(parent)
            this.parents.set(x, root)
            return root
        }
        return x

    }

    union(x, y) {
        let rootX = this.find(x)
        let rootY = this.find(y)

        if (rootX === rootY) return false

        // 
        let rankX = this.rank.get(rootX) ?? 1
        let rankY = this.rank.get(rootY) ?? 1

        if (rankX > rankY) {
            this.parents.set(rootY, rootX)
        } else if (rankY > rankX) {
            this.parents.set(rootX, rootY)
        } else {
            this.parents.set(rootX, rootY)
            this.rank.set(rootY, rankY + 1)
        }


        return true

    }
}