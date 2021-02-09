/* eslint-disable no-unused-vars */
let mySmallMaze = [
  [" ", " ", " "],
  [" ", "*", " "],
  [" ", " ", "e"],
];

let maze = [
  [" ", " ", " ", "*", " ", " ", " "],
  ["*", "*", " ", "*", " ", "*", " "],
  [" ", " ", " ", " ", " ", " ", " "],
  [" ", "*", "*", "*", "*", "*", " "],
  [" ", " ", " ", " ", " ", " ", "e"],
];

function findAWayOutOf(
  maze,
  position = 0,
  row = 0,
  column = 0,
  direction = "S",
  path = []
) {
  if (column < 0 || row < 0) return;
  if (column >= maze[0].length || row >= maze.length) return;

  path[position] = direction;
  position++;

  if (maze[row][column] === "e") {
    console.log("path : ", path);
    return;
  }
  if (maze[row][column] === " ") {
    maze[row][column] = "s";
    findAWayOutOf(maze, position, row, column - 1, "L", path);
    findAWayOutOf(maze, position, row, column + 1, "R", path);
    findAWayOutOf(maze, position, row - 1, column, "U", path);
    findAWayOutOf(maze, position, row + 1, column, "D", path);
    //maze[row][column] = '';
  }
  position--;
}

findAWayOutOf(maze);
