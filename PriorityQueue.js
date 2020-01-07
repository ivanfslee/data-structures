class PriorityQueue {
    constructor() {
        this.values = []; //we'll initialize a valid heap with some values
    }

    enqueue(val, priority) { //(enqueue renamed from 'insert') inserts node to the end of array and bubbleUp will place element in correct spot in binary heap
        let newNode = new Node(val, priority);
        this.values.push(newNode); //push newNode to values array
        this.bubbleUp();
    }

    bubbleUp() { //helper function for insert
        let idx = this.values.length - 1; //last index
        const element = this.values[idx];

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2); //parent index of idx
            let parent = this.values[parentIdx];
            if (element.priority >= parent.priority) { 
                break;
            }

            // swap the values and change the idx to parent and go through while loop again 
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    dequeue() { //renamed from extractMax -> dequeue. We also need to make it a min binary heap (it was previously a max binary heap)
        const min = this.values[0]; //get largest value in binary heap
        const end = this.values.pop(); 
        

        //trickle down the new root value to its correct position in the binary heap
        if (this.values.length > 0) { //this conditional takes care of the edge case of if binary heap has only root node and nothing else 
            this.values[0] = end;  //replace root node with last value
            this.sinkDown(); //helper function to trickle down the root value    
        }
        
        return min;
    }

    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0]; //element variable value will stay the same. only its index will change

        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild; //initialize variables
            let swap = null;
            if (leftChildIdx < length) { //leftChildIdx is in bounds of array (it is a valid index)
                leftChild = this.values[leftChildIdx]; //leftChild is assigned value at that index
                if (leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild.priority < element.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority) //conditional checks that we will swap element with rightChild and not the leftChild 
                ) {
                    swap = rightChildIdx;
                }
            }

            if (swap === null) break; //this is our exit condition for while loop 
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

let ER = new PriorityQueue();
ER.enqueue('common cold', 5);
ER.enqueue('gunshot wound', 1);
ER.enqueue('high fever', 4);
ER.enqueue('broken arm', 2);
ER.enqueue('glass in foot', 3);

ER.dequeue(); //returns min node 'gunshot wound'

//currently no logic to account for nodes for same priority 
//in reality though, there are many different parameters that will affect priority - e.g. time/date which one was earlier


//Big O analysis of binary heaps
//Insertion - O(log N) best case  | worst case is still O(log N) - a single branched/unbalanced tree is not possible with heaps because heaps will fill each level completely before going to next level
//Removal - O(log N) best case    | 
//Search - O(N) - if you want to search, you would probably use a binary search tree not a binary heap. There is no inherent order to heaps. 

//Heaps are not optimized for searching (you would use a BST for that probably). But insertion/removal binary heaps are good for that. 