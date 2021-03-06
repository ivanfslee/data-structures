//Binary heaps are a specific type of heap. Heaps are a type of tree. 

//Binary Heaps are useful data structures for sorting and implementing other data structures like priority queues

//Binary heaps are Max Binary Heaps or Min Binary Heaps - parents are smaller (min binary heap) or larger (max binary heap) than their children

//We can represent heaps using arrays. And use math (2n + 1) (2n - 1) to access children 
//We basically flatten out the heap into a linear array and use math formulas to access the children/parent indices

//You could represent heaps with nodes like we did with binary search trees but working with arrays is easier 


class MaxBinaryHeap {
    constructor() {
        this.values = []; //we'll initialize a valid heap with some values
    }

    insert(element) { //inserts element to the end of array and bubbleUp will place element in correct spot in binary heap
        this.values.push(element);
        this.bubbleUp();
    }

    bubbleUp() { //helper function for insert
        let idx = this.values.length - 1; //last index
        const element = this.values[idx];

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2); //parent index of idx
            let parent = this.values[parentIdx];
            if (element <= parent) { 
                break;
            }

            // swap the values and change the idx to parent and go through while loop again 
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    extractMax() {
        const max = this.values[0]; //get largest value in binary heap
        const end = this.values.pop(); 
        

        //trickle down the new root value to its correct position in the binary heap
        if (this.values.length > 0) { //this conditional takes care of the edge case of if binary heap has only root node and nothing else 
            this.values[0] = end;  //replace root node with last value
            this.sinkDown(); //helper function to trickle down the root value    
        }
        
        return max;
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
                if (leftChild > element) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild > element) || 
                    (swap !== null && rightChild > leftChild) //conditional checks that we will swap element with rightChild and not the leftChild 
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

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);


//remove method
    //removes root in both max binary heap and min binary heap
    //binary heap will then restructure because root is removed
    //replace the root with the last value added
    //take the new root and swap with children (swap with the larger child if both children are bigger) until that new root trickles down to its correct position in the binary heap


//Important application of binary heap is their use in PRIORITY QUEUES
    //Priority queue - data structure where each element has a priority
    //Elements with higher priorities are served before elements with lower priorities
    //e.g. - Triage - gunshot wound has higher priority over someone with a cold 
    //PQ are separate from heaps - they are just an abstract concept
    //You can implement a PQ with an array or list (it wouldnt perform well, but you could do it)
    //PQ are typically implemented using a Max/Min Heap rather then arrays because Heaps have better time complexity
    //Highest priority is at the top (the root)
    //insertion and removal of nodes into a PQ/Max Binary Heap has O(log N) time complexity