/* 
----------------------------------------------------------------
DOUBLY LINKED-LIST
----------------------------------------------------------------
*/
class Node {
  constructor(value) {
    this.prev = null;
    this.next = null;
    this.value = value;
  }
}

class DoublyLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return !this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
      this.size++;
      return;
    }
    this.head.prev = node;
    node.next = this.head;
    this.head = node;
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
      this.size++;
      return;
    }
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
    this.size++;
  }

  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.head.value;
    if (this.size === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.size--;
    return value;
  }

  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.tail.value;
    if (this.size === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.size--;
    return value;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is Empty");
      return;
    }
    let t = this.head;
    let res = "";
    while (t) {
      res += t.value + " ";
      t = t.next;
    }
    console.log(res);
  }

  printReverse() {
    if (this.isEmpty()) {
      console.log("List is Empty");
      return;
    }
    let t = this.tail;
    let res = "";
    while (t) {
      res += t.value + " ";
      t = t.prev;
    }
    console.log(res);
  }
}

const dll = new DoublyLL();

dll.print();
dll.printReverse();
dll.prepend(3);
dll.prepend(2);
dll.prepend(1);
dll.append(4);
dll.append(5);
dll.append(6);
console.log(dll.removeFromEnd())
console.log(dll.removeFromFront())
dll.print();
dll.printReverse();
