//Construct a doubly linked list
//Compare and contrast Doubly and Singly Linked Lists
//Implement basic operations on a doubly linked list 
    //push
    //pop
    //shift
    //unshift
    //insert
    //get
    //set


//Doubly Linked List 
    //Almost identical to Singly Linked List
        //Both have no indices
        //Both have an order to them
        //Both are nodes connected by pointers 
        //SLL - are unidirectional
        //DLL - are bidirectional
    //Except every node has another pointer
    //to the previous node

    //head points to null and next node
    //tail points to previous node and null 

    //Removing last node is alot easier with Doubly Linked Lists
    //You can go to the tail and then go to the previous node to remove the tail
    //With Singly Linked List, to remove last node, you have to go through the whole list
    //and get to the second to the last element, in order to remove the tail. 

    //For each operation with a Doubly Linked List 
    //We have to update 2 things - next and previous 
    //Rather than just one with singly linked list 

    //Major drawback compared to Singly Linked Lists
    //Is that Doubly Linked Lists take up more memory
    //Because we store previous and a next, rather than just next 
    //More memory === more flexibility 

//Two classes
    //Node
        //val
        //next
        //previous
    //DoublyLinkedList
        //head
        //tail
        //length

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) { //add a node to end of DLL
        var newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode; //current tail's next is set to newNode
            newNode.prev = this.tail; //newNode's previous set to current tail
            this.tail = newNode; //current tail is set to newNode (newNode is now the tail)
        }
        this.length++; //increment length of DLLs
        return this; //return the DLL
    }

    pop() { //remove node from end of DLL 
        if (!this.head) { //can also use this.length === 0
            return undefined;
        }
        var poppedNode = this.tail;
        if (this.length === 1) { //special case if there is only one node 
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev; //set new tail - this is much easier to do here with DLL. With SLL we had to iterate through entire linked list
            this.tail.next = null; //set new tail's next to be null
            poppedNode.prev = null; //sever ties of poppedNode
        }
        this.length--;
        return poppedNode; //return poppedNode 
    }

    shift() { //removing a node from the beginning of the DLL
        if (this.length === 0) {
            return undefined;
        }

        var oldHead = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length -= 1;
        return oldHead;
    }

    unshift(val) { //add a node to the beginning of the DLL
        var newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) { //access a node in a DLL by its position - takes an idex number and returns the node at that index 
        //With DLL, you can start at either tail or head and find the node you are looking for
        //But with SLL, you can only start from the head because it is unidirectional

        if (index < 0 || index >= this.length) { //edge cases - if negative index or index is equal or greater than length
            return null;
        }

        var count, current;

        if (index <= this.length/2) { //looping from beginning if index is closer to beginning of DLL
            console.log('Working from start');
            count = 0;
            current = this.head;

            while (count != index) {
                current = current.next;
                count++;
            }

        } else { //we loop from the end rather than from the beginning because index is closer to the end of DLL
            console.log('Working from end');
            count = this.length - 1;
            current = this.tail;

            while (count !== index) {
                current = current.prev;
                count--;
            }   
        }
        return current;
    }

    set(index, newValue) { //replacing the value of a node in a DLL based on index
        var foundNode = this.get(index); //use get method to get node at index 
        if (foundNode !== null) {
            foundNode.val = newValue;
            return true;
        }
        return false;
    }

    insert(index, value) { //add a node into DLL at a certain position
        if (index < 0 || index > this.length) { //if index is less than zero or greater than length of DLL, return false
            return false;
        }

        if (index === 0) { //if index is 0, use unshift method to add new node to beginning
            console.log('Add node to beginning');
            return !!this.unshift(value); //!! double bang turns it into boolean
        }

        if (index === this.length) { //if index is equal to length, use push method to add node to the end of DLL
            console.log('Add node to end');
            return !!this.push(value); //!! double bang turns it into boolean
        }

        //create new node
        var newNode = new Node(value);

        //note: before/after node are nodes that will be between the newly inserted node (newNode)
        
        //get node before the index we will insert at 
        var beforeNode = this.get(index - 1); 
        
        //get node after the beforeNode
        var afterNode = beforeNode.next;

        //connect beforeNode and newNode
        beforeNode.next = newNode, newNode.prev = beforeNode;

        //connect afterNode and newNode
        newNode.next = afterNode, afterNode.prev = newNode;

        this.length++;
        return true;
    }

    remove(index) { //remove a node in DLL by index 
        if (index < 0 || index >= this.length) {
            return undefined;
        }

        //if index to remove is 0, just use shift method to remove node
        if (index === 0) {
            return this.shift();
        }

        //if index to remove is the last index (index - 1), use pop method to remove node
        if (index === this.length - 1) {
            return this.pop();
        }

        var removedNode = this.get(index);

        //connect prev to the next of removed node (skipping the removedNode). Then connect the next's prev to removedNode's prev, also skipping the removedNode
        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;

        //alternatively instead of line 225 and 226 - you can replace with the following 4 lines:
        // var beforeNode = removedNode.prev;
        // var afterNode = removedNode.next;
        // beforeNode.next = afterNode;
        // afterNode.prev = beforeNode;


        //sever removedNode's connections by setting next and prev to null
        removedNode.next = null;
        removedNode.prev = null;

        this.length--;

        console.log('Removing node:');
        return removedNode;
    }
}

newDLL = new DoublyLinkedList(); //create new DLL 
newDLL.push(99); //push new node with value 99 to DLL
newDLL.push(1);
newDLL.push(2);
newDLL.push(3);
newDLL.push(4);
newDLL.push(5);
newDLL.push(6);
newDLL.push(7);
newDLL.push(8);  
