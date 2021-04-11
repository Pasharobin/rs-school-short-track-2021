/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const arr = email.split('').reverse();
  arr.splice(arr.indexOf('@'));
  if (arr[arr.length - 1] === '.') {
    arr.pop();
  }
  return arr.reverse().join('');
}

module.exports = getEmailDomain;
