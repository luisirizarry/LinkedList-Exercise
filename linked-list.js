/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  pop() {
    if (!this.head) return null;
    
    let current = this.head;
    let newTail = current;
    
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current.val;
  }

  shift() {
    if (!this.head) return null;
    
    const headVal = this.head.val;
    this.head = this.head.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return headVal;
  }

  getAt(idx) {
    if (idx < 0 || idx >= this.length) return null;
    
    let current = this.head;
    let count = 0;

    while (count < idx) {
      current = current.next;
      count++;
    }

    return current.val;
  }

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) return null;

    let current = this.head;
    let count = 0;

    while (count < idx) {
      current = current.next;
      count++;
    }

    current.val = val;
  }

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) return null;

    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);

    const newNode = new Node(val);
    let current = this.head;
    let count = 0;

    while (count < idx - 1) {
      current = current.next;
      count++;
    }

    newNode.next = current.next;
    current.next = newNode;
    this.length++;
  }

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) return null;

    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();

    let current = this.head;
    let count = 0;

    while (count < idx - 1) {
      current = current.next;
      count++;
    }

    const removed = current.next;
    current.next = removed.next;
    this.length--;

    return removed.val;
  }

  average() {
    if (this.length === 0) return 0;

    let total = 0;
    let current = this.head;

    while (current) {
      total += current.val;
      current = current.next;
    }

    return total / this.length;
  }
}


module.exports = LinkedList;
