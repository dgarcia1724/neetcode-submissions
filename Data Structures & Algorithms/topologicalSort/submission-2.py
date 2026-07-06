class Solution:
    def topologicalSort(self, n: int, edges: List[List[int]]) -> List[int]:
        adj = defaultdict(list)
        for src, dst in edges:
            adj[src].append(dst)

        topSort = []
        visited = set()  # Visited nodes
        visiting = set() # Nodes being visited in the current DFS call (used to detect cycles)
        
        def dfs(src: int) -> bool:
            if src in visited:
                return True
            if src in visiting:
                return False  # A cycle is detected

            visiting.add(src)
            
            for neighbor in adj[src]:
                if not dfs(neighbor):
                    return False  # A cycle is detected
                
            visiting.remove(src)
            visited.add(src)
            topSort.append(src)
            
            return True  # No cycle detected

        for i in range(n):
            if not dfs(i):
                return []  # Return an empty list if a cycle is detected
        
        topSort.reverse()

        return topSort
        
