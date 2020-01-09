//Graph usage in the real world 
    //social network - modeling users 
    //recommendation engines - netflix recommend movie, advertisers target you based on something

//Objectives 
//What is a graph?

//Compare and contrast different types of graphs and their use cases in the real world 

//Implement graph using an 'adjacency list' (there are multiple ways to implement graphs)

//Traverse through a graph using Breadth First Search and Depth First Search

//Compare and contrast graph traversal algorithms


// A graph is a collection of nodes and connections between those nodes 
    //Trees are a special type of graph
    //Graphs though have no entry point - trees typically have a root node
    //Nodes in a graph are treated equally and they have their own connections 

//Uses for Graphs
    //social networks
    //location/mapping/pathfinding
    //recommendation engines - 'people also watched, you might also like, people you might know, frequently bought with'
    //routing algorithms
    //visual hierarchy
    //file system optimizations
    //etc.

//Graph Terms
    //Vertex - node
    //Edge - connection between nodes
    //Weighted/Unweighted - values assigned to distances betweeen vertices
        // weighted - if we assign values to the edges it is said to be weighted
        // unweighted - no values assigned to edges 
    //Undirected Graph - two way connections between vertices (e.g. friends on facebook (ignoring celebrity pages))
    //Directed Graph - one way connections between vertices indicated by arrows (e.g. following people on instagram)


//Most common way of implementing graphs 
    //1. Adjacency matrix
    //2. Adjacency list 