class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        q = collections.deque() # [i, v] leftmost is max

        res =[]

        l = 0
        for r in range(len(nums)):
            while q and q[-1][1] <= nums[r]:
                q.pop()
            q.append([r, nums[r]])

            if q[0][0] < l:
                q.popleft()
            
            if (r-l+1) == k:
                index, val = q[0]
                res.append(val)
                l += 1

        return res
