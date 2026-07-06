class Solution:
    def islandsAndTreasure(self, grid: List[List[int]]) -> None:
        ROWS, COLS = len(grid), len(grid[0])

        q = collections.deque()

        for r in range(ROWS):
            for c in range(COLS):
                if grid[r][c] == 0:
                    q.append((r,c))
        
        visited = set()
        distance = 0
        while q:
            for i in range(len(q)):
                r,c = q.popleft()
                if (
                    r in range(ROWS)
                    and c in range(COLS)
                    and grid[r][c] != -1
                    and (r,c) not in visited
                ):
                    visited.add((r,c))
                    grid[r][c] = distance
                    q.append((r+1,c))
                    q.append((r-1,c))
                    q.append((r,c+1))
                    q.append((r,c-1))
            distance += 1
        

            