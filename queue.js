class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }
    //make the new node the last item on the queue
    this.last = node;
  }
  dequeue() {
    //if the queue is empty, there is nothing to return
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    //if this is the last item in the queue
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }

  peek() {
    const top = this.first;
    return top;
  }

  isEmpty() {
    if (!this.first) {
      console.log("The queue is empty");
    }
  }

  display() {}
}

const starTreckQ = new Queue();
starTreckQ.isEmpty();
starTreckQ.enqueue("Kirk");
starTreckQ.enqueue("Spock");
starTreckQ.enqueue("Uhura");
starTreckQ.enqueue("Sulu");
starTreckQ.enqueue("Checkov ");
console.log(starTreckQ.peek());
starTreckQ.isEmpty();
starTreckQ.dequeue();
starTreckQ.dequeue();
console.log(starTreckQ);
