class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {

        // "I'll build an adjacency list mapping each course to its prerequisites."
        const crsToPre = new Map();

        // "First, I'll initialize every course with an empty prerequisite list."
        for (let crs = 0; crs < numCourses; crs++) {
            crsToPre.set(crs, []);
        }

        // "Now I'll populate the graph with the prerequisite relationships."
        // "Each directed edge goes from a course to its prerequisite."
        for (const [crs, pre] of prerequisites) {
            crsToPre.get(crs).push(pre);
        }

        // "Output will store our topological ordering."
        const output = [];

        // "Visiting tracks the current DFS path.
        // Finished tracks courses already checked and confirmed cycle-free."
        const visiting = new Set();
        const finished = new Set();

        // "I'll use DFS to process all prerequisites before adding a course."
        const dfs = (crs) => {

            // "If this course is already on our current path, we've found a cycle."
            if (visiting.has(crs)) return false;

            // "If we've already processed this course, we can skip it."
            if (finished.has(crs)) return true;

            // "Mark this course as part of our current DFS path."
            visiting.add(crs);

            // "Explore all prerequisites before completing this course."
            for (const pre of crsToPre.get(crs)) {

                // "If any prerequisite leads to a cycle, propagate failure."
                if (!dfs(pre)) return false;
            }
            // "Add this course after its prerequisites to produce a valid order."
            output.push(crs);

            // "We're done exploring this course, so remove it from our current path."
            visiting.delete(crs);

            // "Mark this course as fully processed."
            finished.add(crs);


            return true;
        };

        // "I'll run DFS on every course because the graph may be disconnected."
        for (let crs = 0; crs < numCourses; crs++) {

            // "If we detect a cycle, no valid course ordering exists."
            if (!dfs(crs)) return [];
        }

        // "All courses are processed, so return the topological ordering."
        return output;
    }
}

// Time Complexity: O(V + E)
// V = number of courses; E = number of prerequisite pairs.
// Building the adjacency list takes O(V + E).
// Each course is fully processed at most once.
// Each prerequisite edge is explored at most once.

// Space Complexity: O(V + E)
// The adjacency list stores V courses and E prerequisite edges.
// The visiting and finished sets each use at most O(V) space.
// The DFS recursion stack can grow to O(V) in the worst case.