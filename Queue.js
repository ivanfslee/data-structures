// Stack = LIFO |  Queue = FIFO
// For both Stacks and Queues insertion and removal is constant time O(1)

// An array implementation of a Queue - would use  push and shift array methods - need to reindex (no bueno)

//Another way an array implementation of a Queue - would use unshift and pop array methods  - need to reindex (no bueno)

//Thus, it would make sense to implement your own Queue (without using array)

//With a Stack data structure you can use an array with push and pop - you would never need to reindex entire array


//Implement Queue based on a Singly Linked List 
// Add to the end , remove from the beginning  (this is the preferred way to do it)
// Add to the beginning, remove from the end  (removing from the end is slow O(N) because we have to traverse the entire linked list to get the last node )

//Enqueue - add to end (aka pushed on)
//Dequeue - remove from the beginning  (aka shifted off)

//Big O of Queues 
// Queues prioritize insertion and removal
// Queues really prioritize LIFO insertion and removal 
// Insertion O(1) - important for Queues
// Removal O(1) - important for Queues 
// Searching O(N)
// Access O(N) - arrays would be O(1) for access

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        var newNode = new Node(val);
        if (!this.first) { //if Queue is empty
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode; //add newNode to next of the last node
            this.last = newNode; //make last the newNode
        }
        return ++this.size;
    }

    dequeue() { //identical code to our Stack pop method 
        if (!this.first) { //if Queue is empty
            return null;
        }

        var temp = this.first;
        if (this.first === this.last) { //if only one node in Queue
            this.last = null;
        }

        this.first = this.first.next; // make the first be the first's next (i.e. the second node) - we are removing the first node 
        this.size--;
        return temp.value;
    }
}