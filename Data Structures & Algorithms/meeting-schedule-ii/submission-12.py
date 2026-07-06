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

        for i in intervals:
            start, end = i.start, i.end
            time.append([start, 1])
            time.append([end, -1])
        
        time.sort(key=lambda x:(x[0],x[1]))

        meetings = 0
        maxConcurrentMeetings = 0
        for t in time:
            meetings += t[1]
            maxConcurrentMeetings = max(maxConcurrentMeetings, meetings)
        return maxConcurrentMeetings