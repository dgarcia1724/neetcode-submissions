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
        # Single array time, for all start & end times.
        # 1 for incrementing when a meeting starts, -1 for decrementing when a meeting ends
        for i in intervals: # Can’t do 
#for start, end in intervals:
#bc cannot unpack non-iterable Interval object
            start, end = i.start, i.end
            time.append((start, 1))
            time.append((end, -1))
       
        time.sort(key=lambda x: (x[0], x[1])) #x[1] means if tie, then sort by x[1] (aka 1 or -1)
                                              # -1 goes 1st bc Meeting ends before another meeting starts.
                                              # Remember, (0,8),(8,10) is not considered a conflict at 8
                                              #---- (0,8) ends before (8,10) starts.
       
        meetings = 0
        maxConcurrentMeetings = 0
        for t in time:
            meetings += t[1]
            maxConcurrentMeetings = max(maxConcurrentMeetings, meetings)
        return maxConcurrentMeetings
