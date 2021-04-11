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
  if (matrix.length < 2) {
    return 0;
  }
  let sum = matrix[0].reduce((a, b) => a + b);
  for (let i = 1; i < matrix.length; i++) {
    for (let n = 0; n < matrix[i].length; n++) {
      if (matrix[i - 1][n] !== 0) {
        sum += matrix[i][n];
      }
    }
  }
  return sum;
}

module.exports = getMatrixElementsSum;
