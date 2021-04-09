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
  const len = str.length;
  let temp = '';
  let i = 0;
  while (i < len) {
    let k = i + 1;
    let num = 1;
    while (str.charAt(i) === str.charAt(k)) {
      k++;
      num++;
    }
    if (num > 1) {
      temp += (num + str.charAt(i));
    } else temp += str.charAt(i);
    i = k;
  }
  return temp;
}

module.exports = encodeLine;
