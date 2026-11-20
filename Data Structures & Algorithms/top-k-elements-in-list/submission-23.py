class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count = {}

        for n in nums:
            count[n] = count.get(n, 0) + 1
        
        freq = [[] for i in range(len(nums) + 1)]

        for num, cnt in count.items():
            freq[cnt].append(num)

        res = []
        for i in range(len(freq) -1, 0, -1):
            for val in freq[i]:
                res.append(val)
                if len(res) == k:
                    return res


        
        

        