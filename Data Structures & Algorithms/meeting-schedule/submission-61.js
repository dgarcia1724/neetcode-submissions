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
        // "I'll sort meetings by start time so I can check
        // consecutive meetings for overlap. This modifies the input."
        intervals.sort((a, b) => a.start - b.start);

        for (let i = 1; i < intervals.length; i++) {
            // "If this meeting starts before the previous one ends,
            // they overlap, so I can't attend every meeting."
            // "Equal times are fine: one ends as the next starts."
            if (intervals[i].start < intervals[i - 1].end) {
                return false;
            }
        }

        // "No overlaps were found. Empty and single-meeting
        // inputs also return true."
        return true;
    }
}

// Time: O(n log n) — sorting dominates the O(n) scan.
// Space: Depends on the sorting implementation; commonly O(n)
// for JavaScript's sort. The scan itself uses O(1) extra space.
// n = intervals.length.