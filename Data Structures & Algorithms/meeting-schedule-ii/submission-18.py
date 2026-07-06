"""
Definition of Interval:
class Interval(object):
    def __init__(self, start, end):
        self.start = start
        self.end = end
"""

class Solution:
    def minMeetingRooms(self, intervals: List[Interval]) -> int:
        intervals.sort(key=lambda x: (x.start, x.end))

        times = []

        for i in intervals:
            start, end = i.start, i.end
            times.append((start, 1))
            times.append((end, -1))
        
        # times.sort(key = lambda x: (x[0], x[1]))
        times.sort()

        meetings = 0
        maxConcurrentMeetings = 0
        for i in range(len(times)):
            meetings += times[i][1]
            maxConcurrentMeetings = max(meetings, maxConcurrentMeetings)
        return maxConcurrentMeetings

