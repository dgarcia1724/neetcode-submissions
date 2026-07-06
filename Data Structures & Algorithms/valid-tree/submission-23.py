class Solution:
    def validTree(self, n: int, edges: List[List[int]]) -> bool:
        dsu = UnionFind()
        for n1, n2 in edges:
            if dsu.findParent(n1) == dsu.findParent(n2):
                return False
            dsu.union(n1, n2)
        
        hashset = set()
        for node in range(n):
            hashset.add(dsu.findParent(node))
        
        return 1 == len(hashset)
        

class UnionFind:
    def __init__(self):
        self.f = {}
    
    def findParent(self, x):
        y = self.f.get(x, x)
        if x != y:
            y = self.f[x] = self.findParent(y)
        return y

    def union(self, x,y):
        self.f[self.findParent(x)] = self.findParent(y)