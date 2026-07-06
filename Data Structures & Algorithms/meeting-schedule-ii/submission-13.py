"""
Definition of Interval:
class Interval(object):
    def __init__(self, start, end):
        self.start = start
        self.end = end
"""

class Solution:
    def minMeetingRooms(self, intervals: List[Interval]) -> int:
        time = []
        for interval in intervals:
            start, end = interval.start, interval.end
            time.append([start, 1])
            time.append([end, -1])
        time.sort(key=lambda i: (i[0], i[1]))

        count = 0
        maxCount = 0
        for i in range(len(time)):
            count += time[i][1]
            maxCount = max(count, maxCount)
        return maxCount