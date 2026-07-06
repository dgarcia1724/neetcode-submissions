/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        intervals.sort((a,b)=> a.start - b.start)

        for (let i = 1; i < intervals.length; i++) {
            let prevInterval = intervals[i-1]
            let currInterval = intervals[i]

            if (prevInterval.end <= currInterval.start) {
                continue
            }
            return false

        }

        return true
    }
}


// //         intervals.sort(key = lambda x: x.start)

//         for i in range(1, len(intervals)):
//             prevInterval = intervals[i-1]
//             currInterval = intervals[i]

//             if prevInterval.end <= currInterval.start:
//                 continue
//             return False
//         return True





