/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  let l2 = l;
  let list = l2;
  if (list.value === k) {
    while (list.value === k) {
      list = list.next;
    }
    l2 = list;
  }
  while (list.next) {
    while (list.next.value === k) {
      if (list.next.next === null) {
        list.next = null;
      } else list.next = list.next.next;
    }
    list = list.next;
  }
  return l2;
}

module.exports = removeKFromList;
