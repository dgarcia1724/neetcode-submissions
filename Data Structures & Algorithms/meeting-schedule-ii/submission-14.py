"""
Definition of Interval:
class Interval(object):
    def __init__(self, start, end):
        self.start = start
        self.end = end
"""

class Solution:
    def minMeetingRooms(self, intervals: List[Interval]) -> int:
        times = []
        for interval in intervals:
            start, end = interval.start, interval.end
            times.append([start, 1])
            times.append([end, -1])
        times.sort()

        res = 0
        currentNumberOfRooms = 0
        for time in times:
            roomCount = time[1]
            currentNumberOfRooms += roomCount
            res = max(res, currentNumberOfRooms)
        return res
