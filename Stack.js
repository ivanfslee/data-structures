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


//////////////////////////////////////////////////////////////////////////
//Algo Expert Stacks and Queues Notes
    //Big O of Stacks and Queues
        //Support O(1) constant time and constant space insertion and deletion of elements 
        //O(N) linear time for searching for an element - O(1) space
        //O(N) space for storing an element, where N is number of elements in stack/queue, O(1) time to add/remove element 
        //Typically, stacks and queues are initialized empty and add things one by one when you need to

        //Both structures also typically support a 'peek' method
            //O(1) constant time and constant space operation
            //It just shows the next element to be dequeued/popped from the queue/stack

    //Stacks = Last In, First Out 
        //Data Structure that supports inserting and removing elements that follows last in/first out 
        //List of elements in some sort of order - that follow LIFO 
        //Adding or removing an element in/out of stack is O(1) constant time and space
        //A stack under the hood is really just a dynamic array or can be implemented using an array under the hood
            //recall, push/pop on a dynamic array is amortized constant time operation
            //e.g. given an array - [1, 2, 3] - 'push' an element on the end of a stack or 'pop' an element from the end of stack is constant time
            //This also means searching for an element in the stack is O(N) time and O(1) space - you have to traverse entire dynamic array
            //This also means adding an element to the front of stack is also O(N)
                //Though, with a stack, we don't care about adding elements in the beginning/in the middle of the stack
    
    //Taking stacks a step further
    //Max stack/min stack
        //stack that keeps track of largest element or smallest element

    //Queue = First In, First Out 
        //List of elements that follow FIFO
        //Adding or removing an element in/out of the queue is O(1) constant time and space
        //In order for a queue to support constant time insertion at the beginning and removal at the end, it uses a singly linked list
        //A dynamic array cannot have insertion in the beginning be constant time 
        //to 'enqueue' aka add to the head of the linked list - you can do this in constant time 
        //to 'dequeue' aka remove the tail of the linked list - you can do this in constant time
    
    //Taking queues a step further
    //Priority queue
        //queue that keeps track of priority