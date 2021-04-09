/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const m = matrix;
  const width = matrix[0].length - 1;
  const height = matrix.length - 1;
  function isMine(y, x) {
    if (x >= 0 && x <= width && y >= 0 && y <= height) {
      return (matrix[y][x] === true) ? 1 : 0;
    } return 0;
  }
  for (let i = 0; i <= height; i++) {
    for (let k = 0; k <= width; k++) {
      if (!m[i][k]) {
        m[i][k] = isMine(i - 1, k) + isMine(i - 1, k - 1) + isMine(i, k - 1)
                  + isMine(i + 1, k - 1) + isMine(i + 1, k) + isMine(i + 1, k + 1)
                  + isMine(i, k + 1) + isMine(i - 1, k + 1);
      }
    }
  }
  for (let i = 0; i <= height; i++) {
    for (let k = 0; k <= width; k++) {
      if (m[i][k] === true) { m[i][k] = 1; }
    }
  }
  return m;
}

module.exports = minesweeper;
