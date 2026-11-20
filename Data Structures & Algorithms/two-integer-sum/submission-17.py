class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # hashmap, val => i

        valToIndex = {}

        for i, n in enumerate(nums):
            # get diff
            diff = target - n
            # check if diff inside hashmap
            if diff in valToIndex:
                return [valToIndex[diff], i]
            # ---- return indices

            # add value & index to hashmap
            valToIndex[n] = i
        



        