class Solution:
    def topologicalSort(self, n: int, edges: List[List[int]]) -> List[int]:
        adj = collections.defaultdict(list)
        for n1,n2 in edges:
            adj[n1].append(n2)
        
        topSort = []
        visited = set()
        visiting = set()

        def dfs(node):
            if node in visited:
                return True
            if node in visiting:
                return False
            
            visiting.add(node)
            for nei in adj[node]:
                if not dfs(nei):
                    return False
            
            visiting.remove(node)
            visited.add(node)
            topSort.append(node)
            return True
        
        for node in range(n):
            if not dfs(node):
                return []
        
        return topSort[::-1]