class MaxBinaryHeap {
    constructor() {
        this.values = [41, 39, 33, 18, 27, 12]; //we'll initialize a valid heap with some values
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
            if (element <= parent) { //if this condition is true, swap the values
                break;
            }
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

}

let heap = new MaxBinaryHeap();