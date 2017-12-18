import Node from './Node';

export default class LinkedList {
  constructor (length = 0, head = null) {
      this.length = length;
      this.head = head;
  }


  unshift(data) {
    const newNode = new Node(data);
    this.length++;

    if(this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    return;
  }

  shift() {
    if(this.length === 0) {
      return null;
    } else {
      let previousHead = this.head;
      this.head = previousHead.next;
      this.length--;
      return previousHead;
    }
  }

  push(data) {
    const newNode = new Node(data);
    this.length++;

    if(this.head === null) {
      this.head = newNode;
    } else {
      this.head = this.head.next;
    }

    this.head.next = newNode;
    return;
  }

  pop() {
    if(this.length === 0) {
      return null;
    } else if(this.length === 1){
      this.head = null;
      this.length--;
      return this.head;
    }

    this.head.next = null;
    this.length--;
    return this.head;
  }

}