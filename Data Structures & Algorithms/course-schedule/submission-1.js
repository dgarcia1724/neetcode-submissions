class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        let crsToPre = new Map()

        for (let i = 0; i < numCourses; i++) {
            crsToPre.set(i, [])
        }

        for (const [crs, pre] of prerequisites) {
            crsToPre.get(crs).push(pre)
        }

        const visiting = new Set()
        const finished = new Set()

        const dfs = (crs) => {
            if (visiting.has(crs)) return false
            if (finished.has(crs)) return true

            visiting.add(crs)

            for (const pre of crsToPre.get(crs)) {
                if (!dfs(pre)) return false
            }

            visiting.delete(crs)
            finished.add(crs)
            return true

        }

        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i)) return false
        }

        return true

    }
}
