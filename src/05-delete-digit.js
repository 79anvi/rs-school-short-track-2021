/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  function compareNumbers(a, b) {
    return a - b;
  }
  const str = String(n);
  const len = str.length;
  const arr = [];
  for (let i = 0; i < len; i++) {
    let temp = '';
    for (let k = 0; k < len; k++) {
      if (i !== k) {
        temp += str.charAt(k);
      }
    }
    arr.push(+temp);
  }
  return arr.sort(compareNumbers).pop();
}

module.exports = deleteDigit;
