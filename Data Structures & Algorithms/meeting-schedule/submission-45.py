"""
Definition of Interval:
class Interval(object):
    def __init__(self, start, end):
        self.start = start
        self.end = end
"""

class Solution:
    def canAttendMeetings(self, intervals: List[Interval]) -> bool:
        intervals.sort(key=lambda x: (x.start, x.end))

        for i in range(len(intervals)-1):
            prevInterval = intervals[i]
            interval = intervals[i+1]

            if prevInterval.end <= interval.start:
                continue
            return False
        return True