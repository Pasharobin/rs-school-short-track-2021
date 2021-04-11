/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const arr = domains.map((e) => e.split('.').reverse()).sort((a, b) => b.length - a.length);
  const obj = {};
  let str = '';
  let key = '';
  let count = 1;
  if (arr.length === 1) {
    arr[0].forEach((e) => {
      str += `.${e}`;
      obj[str] = 1;
    });
  }
  if (arr.length > 1) {
    for (let n = 0; n < arr[0].length; n++) {
      str = arr[0][n];
      for (let i = 1; i < arr.length; i++) {
        if (str === arr[i][n]) {
          count++;
        }
      }
      key += `.${str}`;
      obj[key] = count;
      count = 1;
    }
  }
  return obj;
}

module.exports = getDNSStats;
