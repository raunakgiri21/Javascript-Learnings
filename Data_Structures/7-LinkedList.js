/* 
----------------------------------------------------------------
LINKED-LIST DATA STRUCTURE
----------------------------------------------------------------
*/

// the commented out codes are not this.tail compatible

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  // insert(value, index) {
  //   if (index > this.getSize() || index < 0) {
  //     console.log("Invalid index: " + index);
  //     return;
  //   }
  //   if (index === 0) {
  //     this.prepend(value);
  //   } else {
  //     const node = new Node(value);
  //     let prev = this.head;
  //     for (let i = 0; i < index - 1; i++) {
  //       prev = prev.next;
  //     }
  //     node.next = prev.next;
  //     prev.next = node;
  //     this.size++;
  //   }
  // }

  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    if (this.size === 1) {
      this.tail = null;
      this.head = null;
    }
    this.size--;
    return value;
  }

  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.head.value;
    if (this.size === 1) {
      this.tail = null;
      this.head = null;
    } else {
      let prev = this.head;
      while (prev.next !== this.tail) {
        prev = prev.next;
      }
      prev.next = null;
      this.tail = prev;
    }
    this.size--;
    return value;
  }

  // remove(index) {
  //   if (index < 0 || index >= this.size) {
  //     return null;
  //   }
  //   let removedNode = this.head;
  //   if (index === 0) {
  //     this.head = this.head.next;
  //   } else {
  //     let prev = this.head;
  //     while (index - 1) {
  //       prev = prev.next;
  //       index--;
  //     }
  //     removedNode = prev.next;
  //     prev.next = removedNode.next;
  //   }
  //   this.size--;
  //   return removedNode.value;
  // }

  // removeValue(value) {
  //   if (this.size === 0) {
  //     return null;
  //   }
  //   if (this.head.value === value) {
  //     this.head = this.head.next;
  //     this.size--;
  //     return value;
  //   }
  //   let prev = this.head;
  //   while (prev.next.value !== value && prev.next !== null) {
  //     prev = prev.next;
  //   }
  //   if (prev.next) {
  //     let removedNode = prev.next;
  //     prev.next = removedNode.next;
  //     this.size--;
  //     return value;
  //   }
  //   return null;
  // }

  search(value) {
    if (this.size === 0) {
      return -1;
    }
    let t = this.head;
    let ind = 0;
    while (t) {
      if (t.value === value) {
        return ind;
      }
      t = t.next;
      ind++;
    }
    return -1;
  }

  // reverse() {
  //   if (this.size === 0) return;
  //   let prev = null;
  //   let curr = this.head;
  //   while (curr) {
  //     let next = curr.next;
  //     curr.next = prev;
  //     prev = curr;
  //     curr = next;
  //   }
  //   this.head = prev;
  // }

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
}

const list = new LinkedList();
console.log("Empty: ", list.isEmpty());
console.log("Size: ", list.getSize());
list.prepend(10);
list.prepend(20);
list.append(40);
list.append(0);
list.prepend(30);
list.print();
console.log("Size: ", list.getSize());
console.log(list.search(0));
list.removeFromEnd();
list.removeFromFront();
list.print();
