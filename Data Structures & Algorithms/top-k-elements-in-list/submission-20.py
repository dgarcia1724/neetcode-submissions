class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        # count in hashmap 
        # key, val. num = > count 
        count = {}
        for n in nums:
            count[n] = count.get(n, 0) + 1

        # freq bucket
        freq = [[] for i in range(len(nums) + 1)]
        # index is count & value is list that contains nums for each count
        for n, app in count.items():
            freq[app].append(n)


        res = []
        # iterate backwards
        for i in range(len(freq) -1, 0, -1):
            for val in freq[i]:
                res.append(val)
                if len(res) == k:
                    return res

        # keep appending from the back
        # once res len is equal to k, we are done
        