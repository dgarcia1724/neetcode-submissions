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
        while i < len(s):
            j = i
            # get length
            while s[j] != "#":
                j+= 1
            length = int(s[i:j])

            i = j + 1
            j = i + length

            word = s[i:j]

            # get string 
            res.append(word)

            # res.push

            # i to next word
            i = j
        
        return res
