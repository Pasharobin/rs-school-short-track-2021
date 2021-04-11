/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  if (names.length === 0) {
    return [];
  }
  let arr1 = names.join('+').split('+');
  const arr2 = names.join('+').split('+');
  let n = 0;
  let c = 0;
  for (let i = 0; i < arr1.length; i++) {
    let count = 0;
    c++;
    for (n; n < arr2.length; n++) {
      if (arr2[n] === arr1[i]) {
        if (count > 0) {
          arr2[n] = `${arr2[n]}(${count})`;
        }
        count++;
      }
    }
    n = c;
    arr1 = arr2.join('+').split('+');
  }
  return arr1;
}

module.exports = renameFiles;
