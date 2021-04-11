/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const indexArr = arr.map((e, i) => {
    if (e === -1) {
      return i;
    }
    return false;
  });
  const sortArr = arr.map((e) => {
    if (e !== -1) {
      return e;
    }
    return 10000;
  }).sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (indexArr.includes(i)) result.push(-1);
    else {
      result.push(sortArr[0]);
      sortArr.shift();
    }
  }
  return result;
}

module.exports = sortByHeight;
