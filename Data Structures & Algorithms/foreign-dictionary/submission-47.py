class Solution:
    def foreignDictionary(self, words: List[str]) -> str:
        adj = {}
        for word in words:
            for char in word:
                adj[char] = set()

        for i in range(1, len(words)):
            w1, w2 = words[i-1], words[i]
            minLength = min(len(w1), len(w2))
            if w1[:minLength] == w2[:minLength] and len(w1) > len(w2):
                return ""
            for j in range(minLength):
                if w1[j] != w2[j]:
                    adj[w1[j]].add(w2[j])
                    break
        
        # solve first half ⬆️⬆️⬆️
        topSort = []
        finished = set()
        visiting = set()

        def dfs(char):
            if char in finished:
                return True
            if char in visiting:
                return False
            visiting.add(char)

            for nei in adj[char]:
                if not dfs(nei):
                    return False
            visiting.remove(char)
            finished.add(char)
            topSort.append(char)
            return True
        
        for char in adj.keys():
            if not dfs(char):
                return ""
        return "".join(topSort[::-1])














