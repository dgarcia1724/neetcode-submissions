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
        for i in intervals:
            start, end = i.start, i.end
            time.append((start, 1))
            time.append((end, -1))
       
        time.sort(key=lambda x: (x[0], x[1])) #x[1] means if tie, then sort by x[1] (aka 1 or -1)
                                              # -1 goes 1st bc Meeting ends before another meeting starts.
                                              # Remember, (0,8),(8,10) is not considered a conflict at 8
                                              #---- (0,8) ends before (8,10) starts.
       
        count = 0
        max_count = 0 #aka rooms needed (max is for the max number of rooms we needed at any time.)
        # Think, if 3 meetings start & none have ended, that means there is conflict & we need 3 separate rooms.
        # As soon as one meeting ends, subtract one from count of rooms needed.
        for t in time:
            count += t[1]
            max_count = max(max_count, count)
        return max_count