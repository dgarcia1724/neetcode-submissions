class Solution:
    def foreignDictionary(self, words: List[str]) -> str:
        adj = {c:set() for w in words for c in w}

        for i in range(1, len(words)):
            w1, w2 = words[i-1], words[i]
            minLen = min(len(w1), len(w2))
            if w1[:minLen] == w2[:minLen] and len(w1) > len(w2):
                return ""
            for j in range(minLen):
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
        
        for char in adj:
            if not dfs(char):
                return ""
        return "".join(topSort[::-1])














