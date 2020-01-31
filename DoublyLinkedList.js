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
}

newDLL = new DoublyLinkedList(); //create new DLL 
newDLL.push(99); //push new node with value 99 to DLL