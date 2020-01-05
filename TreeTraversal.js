//Given a tree (any tree) - BST, etc
//How to visit every node one time?
//Will make use of recursion heavily 

//Two main ways to traverse a tree
    //Breadth-first Search - going horizontally across each node level
    //Depth-first Search
        //DFS - PreOrder    
        //DFS - InOrder
        //DFS - PostOrder

//DFS vs BFS - Do we prioritize visiting all nodes on same level before we move down ?
//or do we want to work in a more vertical way with DFS?

//Our approach on BFS vs DFS depends a lot on how tree is structured (e.g. 100+ children per node) and how it branches and how the data is distributed 


//BFS - Breadth First Search
//       10
//     6    15
//   3   8    20

//add into queue, then stuff in queue will be put into visited
//queue:  []
//visited: []

// root node - 10
// 10, left = 6, right = 15 -> Add 10, 6, 15 into queue
// 6, left = 3, right = 8 -> Add 3, 8 into queue
// 15, left = null, right = 20 -> Add 20 into queue

//Basically Breadth First Search - goes through each node on each level from left to right and adds the left and right nodes to the queue

class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        var newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this; //return the tree
        }
        
        var current = this.root;
        while (true) {
            if (value === current.value) { //this line handles duplicate values inserted into tree
                return undefined;
            }
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else if (value > current.value) {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    contains(value) {
        if (this.root === null) { //no root - return false
            return false;
        } 

        var current = this.root;
        var found = false;
        while (current && !found) { //while current is not null and found is false
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right
            } else {
                return true; //return true if value === current.value
            }
        }
        return false; //return false if current is null (false) and found is false - basically - if it exits the while loop
    }

    BFS() {
        var data = []; //will return this at the end
        var queue = []; //initialize empty array as a queue
        var node = this.root;

        queue.push(node); //push root into queue
        
        //while there is something in the queue
        while (queue.length) {   //an empty array in Javascript is truthy. [] returns true. 
            node = queue.shift();  //we are pushing to the end, so we need to shift from the beginning (in order to accomplish FIFO behavior of Queue)
            data.push(node); //push node into data

            //we only account for left and right nodes so that would only work for binary trees
            //we can accomodate other trees (e.g. ternary trees) by adding another if condition
            //or we can do it dynamically and just loop through all child nodes (that would then work for any kind of tree)
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        return data;
    }

    DFSPreOrder() {
        var data = [];
        
        function traverse(node) {
            data.push(node.value);
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
        }

        traverse(this.root);
        return data;
    }
}