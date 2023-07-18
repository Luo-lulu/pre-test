function Node(data) {
  this.data = data;
  this.next = null;
}

function Stack() {
  this.head = null;
  this.length = 0;
}

Stack.prototype.push = function(data) {
  const newNode = new Node(data);

  if (!this.head) {
    this.head = newNode;
  } else {
    newNode.next = this.head;
    this.head = newNode;
  }

  this.length++;
};

Stack.prototype.pop = function() {
  if (!this.head) {
    return null;
  }

  const removedNode = this.head;
  this.head = this.head.next;
  removedNode.next = null;
  this.length--;

  return removedNode.data;
};

Stack.prototype.size = function() {
  return this.length;
};

const myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push(3);

console.log(myStack.pop()); // 输出：3
console.log(myStack.size()); // 输出：2