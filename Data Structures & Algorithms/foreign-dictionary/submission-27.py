class Solution:
    def foreignDictionary(self, words: List[str]) -> str:
        adj = {}
        for word in words:
            for c in word:
                adj[c] = set()

        for i in range(1, len(words)):
            word1, word2 = words[i-1], words[i]
            minLen = min(len(word1), len(word2))
            # prefix exact same, but 1st longer
            if word1[:minLen] == word2[:minLen] and len(word1) > len(word2): #Invalid ordering = 
                return ""
            for j in range(minLen):
                if word1[j] != word2[j]:
                    adj[word1[j]].add(word2[j])
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




