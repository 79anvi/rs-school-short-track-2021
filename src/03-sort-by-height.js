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
  function compareNumbers(a, b) {
    return a - b;
  }
  const funArr = arr;
  const newArr = funArr.filter((e) => e >= 0).sort(compareNumbers);
  funArr.forEach((e, i) => {
    if (e >= 0) {
      funArr[i] = newArr.shift();
    }
  });
  return funArr;
}

module.exports = sortByHeight;
