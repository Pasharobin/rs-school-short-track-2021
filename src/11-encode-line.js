/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str.length === 0) {
    return str;
  }
  const arr = str.split('');
  let lett = arr[0];
  let count = 1;
  let result = '';
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === lett) {
      count++;
      if (i === arr.length - 1) {
        result += count + arr[i - 1];
      }
    } else {
      lett = arr[i];
      if (count > 1) {
        result += count + arr[i - 1];
        count = 1;
      } else result += arr[i - 1];
      if (i === arr.length - 1) {
        result += arr[i];
      }
    }
  }
  return result;
}

module.exports = encodeLine;
