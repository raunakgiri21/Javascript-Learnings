/* 
----------------------------------------------------------------
QUEUE DATA STRUCTURE
----------------------------------------------------------------
*/
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    return this.items.length ? this.items[0] : null;
  }

  isEmpty() {
    return !this.items.length;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

const queue = new Queue();

console.log(queue.isEmpty());
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.peek());
queue.enqueue(4);
queue.dequeue();

queue.print();

// Using Object

class Queue2 {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    const element = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return element;
  }

  peek() {
    return this.items[this.front];
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  size() {
    return this.rear - this.front;
  }

  print() {
    console.log(this.items);
  }
}

const queue2 = new Queue2();

console.log(queue2.isEmpty());
queue2.enqueue(1);
queue2.enqueue(2);
queue2.enqueue(3);
console.log(queue2.peek());
queue2.enqueue(4);
queue2.dequeue();

queue2.print();

// Circular Queue

class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currLength = 0;
    this.front = -1;
    this.rear = -1;
  }

  isFull() {
    return this.currLength === this.capacity;
  }

  isEmpty() {
    return !this.currLength;
  }

  enqueue(element) {
    if (!this.isFull()) {
      this.rear++;
      this.rear = this.rear % this.capacity;
      this.items[this.rear] = element;
      this.currLength++;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front++;
    this.front = this.front % this.capacity;
    this.currLength--;
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
    return null;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty!");
    } else {
      let i = this.front;
      let str = "";
      for (; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i] + " ";
      }

      str += this.items[i];
      console.log(str);
    }
  }
}

const queue3 = new CircularQueue(5);

console.log(queue3.isEmpty());
queue3.enqueue(10);
queue3.enqueue(20);
queue3.enqueue(30);
queue3.enqueue(40);
queue3.enqueue(50);

console.log(queue3.isFull());
queue3.print();

console.log(queue3.dequeue());
console.log(queue3.peek());
