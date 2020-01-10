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
    //1. Adjacency matrix - stores 0s and 1s - matrix with nodes as column header and row header. values are 0 or 1 to indicate presence or abscence of an edge between the two nodes 
    //2. Adjacency list - just store the edges - obj or list that uses index or key to note the nodes it shares an edge to. The value is an array that has the nodes the key is connected to. {a: ['b', 'c']} -> Node a is connected to node b and node c 

//Matrix - two dimensional usually (not always) implemented with nested arrays 


//Big O - Adjacency Matrix and Adjacency Lists
//If your data is sparse - if you don't have alot of connections/edges, probably don't use a matrix. 
//Adjacency Matrices use up more space because it is a 2 dimensional data structure

//Adjacency List vs Adjacency Matrix
    //Adjacency List
        //Pro - Can take up less space (in sparse graphs)
        //Pro - Fast to iterate over all edges - because Adjacency List only stores edges 
        //Con - Can be slower to lookup specific edge - because you have to iterate through entire list of a node to see if a specific edge exists
    
    //Adjacency Matrix
        //Con - Takes up more space (in sparse graphs)
        //Con - Slower to iterate over all edges - because iterate over things that are not edges (0s) and edges (1s)
        //Pro - Faster to lookup specific edge (i.e. Query an edge) - you just look up on the table if the edge exists

//We will implement ADJACENCY LIST 
//Real world data lends itself to Adjacency Lists moreso than Adjacency Matrices 
    //That is to say - more nodes, less connections 

//We are building an undirected graph
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        //no error handling - this code will overwrite vertices already in adjacency list
        // this.adjacencyList[vertex] = [];

        //with basic error handling
        if (!this.adjacencyList[vertex]) { //if vertex is not in adjacency list, add it and add it with a value of an empty array
            this.adjacencyList[vertex] = [];  //therefore, this won't overwrite vertices already in the adjacency list
        }
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1); //to make a directed graph, you wouldn't include this line of code 
    }
}

//addVertex demo
    //g - our adjacency list
    //g.addVertex('Tokyo');
    // {
    //     'Tokyo': []
    // }

//addEdge demo
    //adjacencyList start
        // { 
        //     'Tokyo': [],
        //     'Dallas': [],
        //     'Aspen': []
        // }

    // g.addEdge('Tokyo', 'Dallas') 

    //adjacencyList end
        // { 
        //     'Tokyo': ['Dallas'],
        //     'Dallas': ['Tokyo'],
        //     'Aspen': []
        // }


