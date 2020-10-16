class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  push(data) {
    /* If the stack is empty, then the node will be the
       top of the stack */
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }

    /* If the stack already has something, 
       then create a new node,
       add data to the new node, and
       have the pointer point to the top */
    const node = new _Node(data, this.top);
    this.top = node;
  }
  pop() {
    /* In order to remove the top of the stack, you have to point
       the pointer to the next item and that next item becomes the
       top of the stack */
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
  peek() {
    const top = this.top;
    return top;
  }
}

const starTrek = new Stack();
starTrek.push("Kirk");
starTrek.push("Spock");
starTrek.push("McCoy");
starTrek.push("Scotty ");
console.log(starTrek.peek());

function is_palindrome(s) {
  string = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let letters = [];
  let word = string;
  let drow = "";

  for (let i = 0; i < word.length; i++) {
    letters.push(word[i]);
  }

  for (let i = 0; i < word.length; i++) {
    drow += letters.pop();
  }
  if (drow === word) {
    console.log(`${word} is a palidrome`);
  } else {
    console.log(`${word} is not a palidrome`);
  }
}

is_palindrome("dad");
is_palindrome("A man, a plan, a canal: Panama");
is_palindrome("1001");
is_palindrome("Tauhida");
