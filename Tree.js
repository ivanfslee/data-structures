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
}

// Creating BST and manually adding nodes 
// var tree = new BinarySearchTree();
// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right = new Node(9);
