class Solution:
    def countComponents(self, n: int, edges: List[List[int]]) -> int:
        uf = UnionFind()

        for n1, n2 in edges:
            uf.union(n1, n2)
        
        hashset = set()
        for i in range(n):
            hashset.add(uf.findParent(i))
        return len(hashset)
        


class UnionFind:
    def __init__(self):
        self.f = {}
    
    def findParent(self, x):
        y = self.f.get(x, x)
        if x != y:
            y = self.findParent(self.f[x])
        return y
    

    
    def union(self, x, y):
        self.f[self.findParent(x)] = self.findParent(y)
