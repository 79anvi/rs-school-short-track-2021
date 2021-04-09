/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let i = 0;
  let len = array.length - 1;
  let k = 0;
  let find = false;
  while (i <= len) {
    k = Math.floor((i + len) / 2);
    if (value === array[k]) {
      find = true;
      break;
    }
    if (value < array[k]) {
      len = k - 1;
    } else i = k + 1;
  }
  return (find) ? k : -1;
}

module.exports = findIndex;
