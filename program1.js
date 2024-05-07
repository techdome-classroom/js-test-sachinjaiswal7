  const getTotalIsles = function (grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] === 'L') {
          count++;
          color(grid, i, j); 
        }   
      }   
    }
    return 0;
  }
   
  function color(grid, i, j) {
    let q = [[i, j]];
    while (q.length) {
      let [x, y] = q.pop();
      grid[x][y] = 0;
      for (let [newX, newY] of [[x + 1, y], [x, y + 1], [x - 1, y], [x, y - 1]]) {
        if (
          newX >= 0 &&
          newX < grid.length &&
          newY >= 0 &&
          newY < grid[0].length &&
          grid[newX][newY] === 'L' 
        ) { 
          q.push([newX, newY]);
        }   
      }   
    }
  }
  
  module.exports = getTotalIsles;

