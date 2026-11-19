class Solution {
    /**
     * @param {string[]} deadends
     * @param {string} target
     * @return {number}
     */
    openLock(deadends, target) {
        let visited = new Set(deadends)

        if (visited.has("0000")) return -1 

        let q = new Queue([["0000", 0]]) // [lock, turn]

        visited.add("0000")

        function getNeighbors(lock) {
            let res = []

            for (let i = 0; i < 4; i++) {
                const up = lock.slice(0,i) + 
                String(    (Number(lock[i])+1)%10      ) +
                lock.slice(i+1);

                const down = lock.slice(0,i) + 
                String(   (Number(lock[i]) -1 + 10)%10     ) + 
                lock.slice(i+1);

                res.push(up, down)
            }


            return res
        }


        // q
        while (!q.isEmpty()) {
            const [lock, turn] = q.pop()

            if (lock === target) return turn
            for (const nei of getNeighbors(lock)) {
                if (!visited.has(nei)) {
                    visited.add(nei)
                    q.push([nei, turn+1])
                }
            }
        }
        // one level at a time
        // pop from q 

        // check if === target, if so return number turns 


        // go through neighbors, & then check if nei is visited
        // ---- if not visited
        // ---- then add to visited & also push to q


        return -1


    }
}
