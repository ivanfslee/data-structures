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

    get(index) {
        if (index < 0 || index >= this.length) {
            return null; //return null or undefined
        }

        var counter = 0;
        var current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++
        }
        return current;
    }

    set(index, val) {
        // One way to do it:
        // if (!this.get(index)) {
        //     return false;
        // } else {
        //     this.get(index).val = val
        //     return true;
        // }

        //Alternatively:
        var foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        } 
        return false;
    }

    insert(index, val) {
        //edge cases - insert at end or beginning or outside the bounds of linked list
        if (index < 0 || index > this.length) {
            return false;
        }
        if (index === this.length) { //if index is last node - add node to end using push
            return !!this.push(val); //double bang coerces it to boolean value - it will push new node and return true
        } 
        if (index === 0) { //if index is the first node - add node to beginning using unshift
            return !!this.unshift(val); //double bang coerces return of a boolean value - it will push new node and return true
        }

        //insert new node in the middle of the linked list
        var newNode = new Node(val);
        var prev = this.get(index - 1) //get node right before index and store as prev
        var temp = prev.next; // temp is prev's current next node 
        prev.next = newNode; // connect prev to new node
        newNode.next = temp  // connect new node to temp (temp is prev's old next node)
        this.length++;
        return true;
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
