class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const target = k - 1

        const distance = ([x, y]) => ((x)**2 + (y)**2) **.5

        function partition(left, right) {
            const pivot = distance(points[right])
            let p = left
            for (let i = left; i < right; i++) {
                if (distance(points[i]) <= pivot) {
                    [points[i], points[p]] = [points[p], points[i]]
                    p++
                }
            }

            [points[right], points[p]] = [points[p], points[right]]
            return p
        }


        function quickSelect(left, right) {
            const p = partition(left, right)
            if (p === target) return 
            if (target < p) {
                return quickSelect(left, p - 1)
            } else {
                return quickSelect(p+1, right)
            }
        }

        quickSelect(0, points.length - 1)

        return points.slice(0, k)








    }
}
