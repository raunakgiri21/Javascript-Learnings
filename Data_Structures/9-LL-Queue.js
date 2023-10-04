/* 
----------------------------------------------------------------
QUEUE USING LINKED-LIST
----------------------------------------------------------------
*/
const LinkedList = require('./7-LinkedList');

class LLQueue {
  constructor() {
    this.list = new LinkedList();
  }

  enqueue(value) {
    this.list.prepend(value);
  }

  dequeue() {
    return this.list.removeFromEnd();
  }

  peek() {
    return this.list.tail.value;
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  getSize() {
    return this.list.getSize();
  }

  print() {
    return this.list.print();
  }
}

const queue = new LLQueue();
console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.print();
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.getSize());
queue.print();