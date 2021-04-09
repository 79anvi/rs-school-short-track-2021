const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.head = null;
    this.len = 0;
  }

  get size() {
    return this.len;
  }

  enqueue(el) {
    const node = new ListNode();
    if (this.head) {
      let tmp = this.head;
      while (tmp.next) {
        tmp = tmp.next;
      }
      tmp.next = node;
      tmp.next.value = el;
    } else {
      this.head = node;
      this.head.value = el;
    }
    this.len++;
  }

  dequeue() {
    const elm = this.head.value;
    this.head = this.head.next;
    this.len--;
    return elm;
  }
}

module.exports = Queue;
