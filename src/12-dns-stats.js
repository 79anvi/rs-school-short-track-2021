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
  const arr = [];
  const res = {};
  let temp = '';
  domains.forEach((e) => (e.split('.').forEach((el) => arr.push(el))));
  arr.reverse();
  [...new Set(arr)].forEach((e) => {
    let num = 0;
    arr.forEach((el) => {
      if (e === el) {
        num++;
      }
    });
    temp += `.${e}`;
    res[temp] = num;
  });
  return res;
}

module.exports = getDNSStats;
