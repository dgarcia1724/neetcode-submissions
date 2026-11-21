class Solution:

    def encode(self, strs: List[str]) -> str:
        res = []
        for s in strs:
            res.append(str(len(s)))
            res.append("#")
            res.append(s)
        
        return "".join(res)


    def decode(self, s: str) -> List[str]:
        res = []
        i = 0

        # Parse each length-prefixed string
        while i < len(s):
            j = i

            # Find the delimiter separating length from content
            while s[j] != '#':
                j += 1

            # Extract the original string's length
            length = int(s[i:j])

            # Move past '#' to the start of the string
            i = j + 1

            # Calculate the end index using the string's length
            j = i + length

            # Extract exactly 'length' characters
            res.append(s[i:j])

            # Move to the next encoded string
            i = j

        return res

        # Time: O(m + n)
        # Space: O(m + n)
        # m = total characters, n = number of strings