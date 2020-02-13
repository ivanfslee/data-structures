// Tree definition - data structure consisting of nodes in a PARENT / CHILD relationship 
// Siblings on the same level cannot connect to each other in a tree (that would instead be called a graph)
// only one root (cannot have more than one root node)
//Root - top node in a tree
//Child - 
//Parent - 
//Siblings - nodes with the same parent
//Leaf - node with no children
//Edge - connection between one node and another

// Root node branches to child nodes 
// Most values stored are numbers / strings but you can store arrays/obj/ etc in the nodes of the tree

// Tree vs List
// Lists - linear | Trees - nonlinear 
// You can think of a Singly Linked List as a special case of a tree (a single branch of a tree)

// Tree vs binary tree vs binary search tree
// We'll focus on Binary search tree

//Examples of trees
//HTML DOM
//Network routing
//Abstract syntax tree
//Artificical Intelligence/Machine Learning
//Folders in Operating System
//JSON

//Tree -> Binary Tree -> Binary Search Tree (stores sorted data in organized way)

//Binary Tree - each node can have AT MOST 2 children , so 0, 1, or 2 children per node 

//Binary Search Trees - a type of Binary Tree 
    //Every parent node has at most two children
    //Every node to the left of parent node is LESS than the parent
    //Every node to the right of parent node is MORE than the parent 

//Big O of BST - 
//Best Case and Average case - (log base 2) O(log n) - n is number of nodes?
//Worst Case - O(n) - (e.g. singly branched binary search tree) 
//one way to deal with it and you still need it sorted as a BST would be to structure the tree and pick a different root node
//If you dont need it as a BST - you could make it a linked list (singly or doubly)

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
}

//Note: handling duplicate values in tree
//Ask interviewer how you should handle duplicates that are inserted into tree. Ignore them? return undefined? Add a count property?
//One possibility is to add a count property to the nodes. If node encounters a duplicate, it will just increment the counter

// Creating BST and manually adding nodes 
// var tree = new BinarySearchTree();
// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right = new Node(9);

//Insert method can be done iteratively or recursively 
//Find/Search method can be done iteratively or recursively
    //Find if a certain value is in the tree


/////////////////////////////////////////////////////////////////////
//Algo Expert Notes on Trees
    //Trees
        //Special type of graph 
        //Good for storing data hierarchically
        //Commonly used to test knowledge of recursion during interviews
    //Tree Definition
        //Tree - is a graph structure that is rooted
            //has a 'root' - the top node 
            //every node has child nodes 
            //typically, the connections are directed
            //They point downwards towards the child nodes 
            //also acyclic - won't point back upwards or form a loop
            //each node in tree can only have one parent (except root node - which has no parent)
            //A single Tree cannot be disconnected - every element is connected to one another 
        
        //Examples of trees
            //e.g. management chain in a company
            //family trees 
            
        //Most common type of tree 
            //binary tree
                //normal tree where every node has at most 2 child nodes 
        
        //Ternary tree 
            //every node has at most 3 child nodes 
        
        //generalize 
            //k-ary trees 
                //k is the max number of trees a child can have
        
        //Binary search trees
            //special kind of binary tree
            //each node's 
        
        //Heaps 
            //Binary heap - 2 types
                //Min Heap 
                //Max Heap
        
        //Tries - are a tree-like data structure that contain characters in a string

        //Sometimes, child node may contain a pointer that points to its parent node

        //Basically, there are alot of different types of trees

        //Big O for trees
            //Storing a tree - almost always O(N) space complexity  
                //where N is the number of total nodes in the tree
            
            //Traversing tree
                //O(N) time complexity - traversing through all N nodes of three 
                
                //Going through a sub tree and not all the nodes 
                    //When going through a binary tree - 
                    //With Each step, you go down a subtree
                    //if it was a 'balanced' binary tree
                    //That would be O(log N) time 
                    //each step down the tree will effective eliminate half of the remaining nodes in the tree
                    
            



