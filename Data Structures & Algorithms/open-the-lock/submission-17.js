class Solution {
    /**
     * @param {string[]} deadends
     * @param {string} target
     * @return {number}
     */
    openLock(deadends, target) {
        let visited = new Set(deadends)

        if (visited.has("0000")) return -1

        const q = new Queue([["0000", 0]]) // [lock, turns]

        visited.add("0000")

        function getNeighbors(lock) {
            let res = []

            for (let i = 0; i < 4; i++) {
                const up = lock.slice(0, i) +
                String(  (Number(lock[i]) + 1)%10   ) +
                lock.slice(i+1)

                const down = lock.slice(0,i) +
                String(   (Number(lock[i])-1+10)%10     ) +
                lock.slice(i+1)


                res.push(up, down)
            }


            return res
        }

        while (!q.isEmpty()) {
            const [lock, turns] = q.pop()

            if (lock === target) return turns 
            for (const nei of getNeighbors(lock)) {
                if (!visited.has(nei)) {
                    visited.add(nei)
                    q.push([nei, turns + 1])
                }
            }
        }

        return -1

    }
}
