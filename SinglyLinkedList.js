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
            this.tail.next = newNode;
            this.tail = newNode;
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
list.push('poi');
