import Node from './Node';

export default class LinkedList {
  constructor (length = 0, head = null) {
      this.length = length;
      this.head = head;
      console.log(LinkedList)
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

  }

  push() {

  }

  pop() {

  }

}