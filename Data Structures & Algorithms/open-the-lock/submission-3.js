class Solution {
    /**
     * @param {string[]} deadends
     * @param {string} target
     * @return {number}
     */
    openLock(deadends, target) {

        // Use a set to track deadends and visited combinations.
        const visit = new Set(deadends);

        // If the starting combination is a deadend, we cannot proceed.
        if (visit.has('0000')) return -1;

        // Generate all possible neighboring combinations.
        // Each of the 4 wheels can turn up or down, giving us 8 neighbors.
        const children = (lock) => {
            const res = [];

            // Iterate through each of the 4 wheels.
            for (let i = 0; i < 4; i++) {

                // Turn the current wheel up by 1.
                // Modulo 10 allows 9 to wrap around to 0.
                const up =
                    lock.slice(0, i) +
                    ((Number(lock[i]) + 1) % 10) +
                    lock.slice(i + 1);

                // Turn the current wheel down by 1.
                // Adding 10 ensures 0 wraps around to 9.
                const down =
                    lock.slice(0, i) +
                    ((+lock[i] - 1 + 10) % 10) +
                    lock.slice(i + 1);

                // Add both neighboring combinations to our result.
                res.push(up, down);
            }

            // Return all 8 possible neighboring combinations.
            return res;
        };

        // Use BFS because we want the minimum number of turns.
        // Start at '0000' with 0 turns.
        const queue = new Queue([['0000', 0]]);

        // Mark the starting combination as visited.
        visit.add('0000');

        // Continue BFS until we've explored all reachable combinations.
        while (!queue.isEmpty()) {

            // Remove the next combination and its number of turns.
            const [lock, turns] = queue.pop();

            // If we've reached the target, return the minimum turns.
            if (lock === target) return turns;

            // Explore all 8 neighboring combinations.
            for (const child of children(lock)) {

                // Only visit combinations that aren't deadends
                // and haven't already been visited.
                if (!visit.has(child)) {

                    // Mark as visited immediately to avoid duplicates.
                    visit.add(child);

                    // Add the neighbor with one additional turn.
                    queue.push([child, turns + 1]);
                }
            }
        }

        // If BFS finishes without reaching the target,
        // the target is unreachable.
        return -1;
    }
}

// Time Complexity: O(10^4 + m)
// There are 10^4 possible lock combinations.
// BFS visits each combination at most once.
// Each combination generates 8 neighbors, which is constant work.
// Creating the visited set from deadends takes O(m).

// Space Complexity: O(10^4 + m)
// The visited set and BFS queue can store up to 10^4 combinations.
// The deadends set initially contains m entries.
// The children function generates only 8 neighbors at a time.