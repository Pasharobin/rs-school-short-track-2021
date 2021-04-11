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
  const result = matrix.map((e, i, a) => e.map((el, ind, arr) => {
    let count = 0;
    if (ind - 1 >= 0) {
      if (arr[ind - 1]) {
        count++;
      }
      if ((i - 1 >= 0) && a[i - 1][ind - 1]) {
        count++;
      }
      if ((i + 1 < a.length) && a[i + 1][ind - 1]) {
        count++;
      }
    }
    if ((i - 1 >= 0) && a[i - 1][ind]) {
      count++;
    }
    if ((i + 1 < a.length) && a[i + 1][ind]) {
      count++;
    }
    if (ind + 1 < arr.length) {
      if (arr[ind + 1]) {
        count++;
      }
      if ((i - 1 >= 0) && a[i - 1][ind + 1]) {
        count++;
      }
      if ((i + 1 < a.length) && a[i + 1][ind + 1]) {
        count++;
      }
    }
    return count;
  }));
  return result;
}

module.exports = minesweeper;
