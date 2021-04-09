/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  const len = s1.length;
  const arr = s2.split('');
  let sum = 0;
  let len2 = s2.length;
  let i;
  for (i = 0; i < len; i++) {
    let k = 0;
    while (k < len2) {
      if (s1.charAt(i) === arr[k]) {
        sum++;
        arr.splice(k, 1);
        len2--;
        break;
      }
      k++;
    }
  }
  return sum;
}

module.exports = getCommonCharacterCount;
