class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort(key=lambda x: (x[0], x[1]))

        res = [intervals[0]]
        for i in range(1, len(intervals)):
            interval = intervals[i]
            curStart, curEnd = interval
            if res[-1][1] < curStart:
                res.append(interval)
            else:
                res[-1] = [
                    min(curStart, res[-1][0]),
                    max(curEnd, res[-1][1])
                ]
        return res
        


