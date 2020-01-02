// Stack = LIFO |  Queue = FIFO
// For both Stacks and Queues insertion and removal is constant time O(1)

// Array implementation of a stack
// Use push and pop to insert to the end and remove from the end
// Alternatively you can use shift and unshift to accomplish Stack using an array
// As long as you are doing LIFO

// Caveat - if you DO use array as a Stack implementation, push and pop are better 
// Because push and pop won't require reindexing the array every time you add or remove something

// There are multiple ways to implement a Stack, Array, Singly Linked List, Doubly Linked List - Some are better than others 

// Stack Implementation using Singly Linked List


//Big O of Stacks
// Stacks really prioritize LIFO insertion and removal 
// Insertion O(1) - important for stacks
// Removal O(1) - important for stacks 
// Searching O(N)
// Access O(N) - arrays would be O(1) for access

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        var newNode = new Node(val);
        if (!this.first) { // if there is nothing at the beginning
            this.first = newNode; // set first the newNode
            this.last = newNode;
        } else {
            var temp = this.first; // store old first node in variable temp
            this.first = newNode;  // set first to the new node
            this.first.next = temp; // set first's next to the old first node (which is stored as temp)
        }
        return ++this.size;
    }

    pop() {
        if (!this.first) {
            return null;
        }
        var temp = this.first;
        if (this.first === this.last) { // edge case - if there is only one node
            this.last = null; 
        }
        this.first = this.first.next; //if this.last = null, then this line will set this.first to null as well, otherwise, it will just make this.first the next node in the list
        this.size--;
        return temp.val; //return first node (that was removed)
    }
}

var stack = new Stack();
stack.push(123);


// Our push and pop method in Singly Linked List was not O(1) it was O(N)
// We need to use shift() and unshift() (and just rename it as push/pop)

// In our implementation we will be adding and removing from the beginning of our list rather than the end 
// Because with SLL - add and remove at the beginning is O(1) constant time 
// If we used a DLL - add and remove at beginning or end would both be O(1) constant time operations 