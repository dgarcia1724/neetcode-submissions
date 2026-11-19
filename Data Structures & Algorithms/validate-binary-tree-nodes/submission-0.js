class Solution {
    /**
     * @param {number} n
     * @param {number[]} leftChild
     * @param {number[]} rightChild
     * @return {boolean}
     */
    validateBinaryTreeNodes(n, leftChild, rightChild) {

        // APPROACH: DFS + Hash Set
        //
        // "A valid binary tree must satisfy three conditions:
        // 1. Exactly one root (a node with no parent).
        // 2. No cycles or nodes visited more than once.
        // 3. All n nodes must be connected.
        //
        // I'll find the root, run DFS to detect repeated visits,
        // and verify that all n nodes were visited."

        // STEP 1: Find all nodes that have a parent.
        //
        // "I'll combine both child arrays and remove -1,
        // since -1 represents a missing child.
        // The Set contains every node that appears as a child."

        let hasParent = new Set(
            [...leftChild, ...rightChild].filter((c) => c !== -1)
        );

        // "If every node has a parent, there is no root,
        // so this cannot be a valid tree."

        if (hasParent.size === n) return false;

        // STEP 2: Find the root.
        //
        // "The root is a node that never appears as a child.
        // I'll find the first node that's not in hasParent."

        let root = 0;

        for (let i = 0; i < n; i++) {
            if (!hasParent.has(i)) {
                root = i;
                break;
            }
        }

        // STEP 3: DFS to detect cycles and repeated nodes.
        //
        // "I'll use a visited Set to track nodes we've seen.
        // If we encounter the same node twice, the structure
        // is invalid because there's a cycle or multiple parents."

        const visit = new Set();

        const dfs = (i) => {

            // "A missing child is valid, so return true."
            if (i === -1) return true;

            // "If we've already visited this node,
            // there's a cycle or a node with multiple parents."
            if (visit.has(i)) return false;

            // "Mark the current node as visited."
            visit.add(i);

            // "Recursively validate both the left and right subtrees.
            // Both must return true."
            return dfs(leftChild[i]) && dfs(rightChild[i]);
        };

        // STEP 4: Verify connectivity.
        //
        // "DFS must succeed without revisiting any node,
        // and we must visit exactly n nodes.
        // Otherwise, some nodes are disconnected."

        return dfs(root) && visit.size === n;
    }
}

// TIME COMPLEXITY: O(n)
// "Building the Set, finding the root, and DFS
// each take O(n) time."

// SPACE COMPLEXITY: O(n)
// "The hasParent and visited Sets use O(n) space,
// and the recursive call stack takes up to O(n) space
// for a skewed tree."