class Solution:
    def islandsAndTreasure(self, grid: List[List[int]]) -> None:
        ROWS, COLS = len(grid), len(grid[0])

        # add starting treasure to q
        q = collections.deque()
        visited = set()

        for r in range(ROWS):
            for c in range(COLS):
                if grid[r][c] == 0:
                    q.append([r,c])
                    visited.add((r,c))
        
        distance = 0

        directions = [(1,0),(-1,0),(0,1),(0,-1)]

        while q:
            for i in range(len(q)):
                r,c = q.popleft()
                for dr, dc in directions:
                    nr, nc = r + dr, c + dc
                    if (
                        nr in range(ROWS)
                        and nc in range(COLS)
                        and grid[nr][nc] != -1
                        and (nr,nc) not in visited 
                    ):
                        visited.add((nr,nc))
                        q.append((nr,nc))
                grid[r][c] = distance
            distance += 1

