class Solution:
    def foreignDictionary(self, words: List[str]) -> str:
        # adj = {char:[] for word in words for char in word}
        adj = {}
        for word in words:
            for c in word:
                adj[c] = []

        for i in range(len(words)-1):
            word1, word2 = words[i], words[i+1]
            minLen = min(len(word1), len(word2))
            if len(word1) > len(word2) and word1[:minLen] == word2[:minLen]:
                return ""
            for j in range(minLen):
                if word1[j] != word2[j]:
                    adj[word1[j]].append(word2[j])
                    break
        
        topSort = []
        visited = set()
        visiting = set()

        def dfs(char):
            if char in visited:
                return True
            if char in visiting:
                return False
            visiting.add(char)
            for nei in adj[char]:
                if not dfs(nei):
                    return False
            visiting.remove(char)

            visited.add(char)
            topSort.append(char)
            return True
        
        for char in adj:
            if not dfs(char):
                return ""
        return "".join(topSort[::-1])




