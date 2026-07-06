class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        res = [0] * len(temperatures)
        pastTemps = [] # [i, t]
        for i,t in enumerate(temperatures):
            while pastTemps and pastTemps[-1][1] < t:
                pastI, pastT = pastTemps.pop()
                res[pastI] = i - pastI
            pastTemps.append([i,t])
        
        return res
                