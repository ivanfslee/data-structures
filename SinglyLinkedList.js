// piece of data - val
// reference to next node - next 

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class singlyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode; //set the current tail's next/pointer to the new node
            this.tail = newNode; //set the tail to be the new node 
        }
        this.length++;
        return this;
    }

    //we cannot go to tail and get second to last node that way. we have to traverse the list from the beginning in order to get to the second to last node  
    pop() { //in order to pop off the last node - we have to traverse the list and find the second to last node 
        if (this.length === 0) {
            return undefined;
        } 
        var current = this.head;
        var newTail = this.head;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null; //severs the connection to the previous tail 
        this.length--;
        if (this.length === 0) { //for edge case when list is empty - we set head and tail to null
            this.head = null;
            this.tail = null;
        }
        return current; //return popped item
    }

    shift() {
        if (!this.head) {
            return undefined;
        }

        var currentHead = this.head;
        this.head = currentHead.next; //set new head to currentHead's next 
        this.length--;

        if (this.length === 0) { //for edge case when list is empty 
            this.head = null;
            this.tail = null;
        }

        return currentHead; //return old head, that was removed
    }

    unshift(val) {
        var newNode = new Node(val);
        if (!this.head) { //edge case - if head is null, that is, it is an empty linked list
            this.head = newNode; //set head to newNode
            this.tail = this.head; //set tail to be newNode 
        } else {            
            newNode.next = this.head; //set next of newNode to the current head
            this.head = newNode; //set head to be new node
        }
        this.length++;
        return this;
    }
}

//create singlyLinkedList obj
var list = new singlyLinkedList();

//push on a new node with a value of 'aloha' 
list.push('aloha');

//push on a new node with a value of 'oy'
list.push('oy');

//push on a new node with a value of 'poi'
console.log(list.push('poi'));
