class Solution:
    def countComponents(self, n: int, edges: List[List[int]]) -> int:
        dsu = UnionFind()
        for n1, n2 in edges:
            dsu.union(n1, n2)
        
        contingentComponents = set()
        for node in range(n):
            contingentComponents.add(dsu.findParent(node))
        return len(contingentComponents)
        

class UnionFind:
    def __init__(self):
        self.f = {}
    
    def findParent(self, x):
        y = self.f.get(x,x)
        if x != y:
            y = self.f[x] = self.findParent(y)
        return y
    
    def union(self, x, y):
        self.f[self.findParent(x)] = self.findParent(y)