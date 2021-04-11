// const ListNode = require('../extensions/list-node');
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

const ListNode = require('../extensions/list-node');

class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  get size() {
    return this.length;
  }

  enqueue(element) {
    if (this.length === 0) {
      this.head = new ListNode();
      this.head.value = element;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new ListNode();
      current.next.value = element;
    }
    this.length++;
  }

  dequeue() {
    const current = this.head;
    this.head = current.next;
    this.length--;
    return current.value;
  }
}

module.exports = Queue;
