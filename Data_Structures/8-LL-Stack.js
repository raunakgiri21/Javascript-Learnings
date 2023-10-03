/* 
----------------------------------------------------------------
STACK USING LINKED-LIST
----------------------------------------------------------------
*/
const LinkedList = require("./7-LinkedList");

class LLStack {
  constructor() {
    this.list = new LinkedList();
  }

  push(value) {
    this.list.prepend(value);
  }

  pop() {
    return this.list.removeFromFront();
  }

  peek() {
    return this.list.head.value;
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

const stack = new LLStack();
console.log(stack.isEmpty());
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.getSize());
stack.print();
