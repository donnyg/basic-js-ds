const { NotImplementedError } = require('../lib/errors');
const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  getUnderlyingList() {
    if (!this.head) return null;

    let node = this.head;
    const result = { value: node.value, next: null };
    let prevResult = result;

    while (node = node.next) {
      prevResult.next = { value: node.value, next: null };
      prevResult = prevResult.next;
    }

    return result;
  }

  enqueue(value) {
    const node = new ListNode(value);

    if (this.tail) {
      this.tail.next = node;
    } else {
      this.head = node;
    }

    this.tail = node;
    this.size++;
  }

  dequeue() {
    if (!this.head) return undefined;

    const target = this.head;
    this.head = target.next;
    this.size--;

    return target.value;
  }
}

module.exports = {
  Queue
};
