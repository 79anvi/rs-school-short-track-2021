/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */

function getMatrixElementsSum(matrix) {
  let i; let k; let sum;
  const height = matrix.length;
  const width = matrix[0].length;
  if (width !== undefined) {
    sum = matrix[0].reduce((a, b) => a + b);
    for (i = 1; i < height; i++) {
      for (k = 0; k < width; k++) {
        if (matrix[i - 1][k] !== 0) sum += matrix[i][k];
      }
    }
  } else sum = matrix.reduce((a, b) => a + b);
  return sum;
}

module.exports = getMatrixElementsSum;
