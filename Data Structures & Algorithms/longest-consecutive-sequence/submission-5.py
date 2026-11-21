class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        hashset = set(nums)
        longest = 0


        for n in nums:
            # check if start
            if (n-1) not in hashset:
                # set length = 1
                length = 1

                while (n+length) in hashset:
                    length += 1
                
                longest = max(length, longest)


                # keep adding to length if next value exists inside hashset 
                # when done, get max of longest 
        

        return longest

        