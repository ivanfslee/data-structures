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

    removeEdge(vertex1, vertex2) {
        //in vertex1 you have to remove vertex2
        //in vertex2 you have to remove vertex1
        //we use filter to replace existing array with new array without vertex1/vertex2

        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }

    removeVertex(vertex) {
        while(this.adjacencyList[vertex].length) { //could use a for loop instead
            const adjacentVertex = this.adjacencyList[vertex].pop(); //pop removes the last vertex and store in variable 'adjacentVertex'
            this.removeEdge(vertex, adjacentVertex); //pass vertex and adjacentVertex into removeEdge() method            
        }
        delete this.adjacencyList[vertex]; //removes vertex key from adjacencyList
    }

    depthFirstRecursive(start) {
        const result = []; //list that will be returned at the end
        const visited = {}; //obj stores visited vertices
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex) { 
            if (!vertex) return null; //if no vertex - return null. This is our base case. When we reach the end of a traversal and there is no vertex
            visited[vertex] = true; //pass the vertex into visited obj
            result.push(vertex); //push vertex into result array
            adjacencyList[vertex].forEach(neighbor => { //loop over each value for that vertex in adjacencyList 
                if (!visited[neighbor]) { //if neighbor is not in visited obj 
                    return dfs(neighbor); //then do the recursive call on the neighbor
                }
            });
        })(start); //iife - immediately invoked with start as the vertex

        return result; //will return order of vertices traversed 
    }

    depthFirstIterative(start) {
        const stack = [start]; //starting vertex placed into stack. stack will kep track of vertices
        const result = []; //stores end result. will be returned at the end 
        const visited = {}; //obj stores visited vertices
        let currentVertex;

        visited[start] = true; //add starting vertex to visited obj 
        while (stack.length) { //while there is something in our stack
            currentVertex = stack.pop(); //pop off vertex from stack and store as currentVertex
            result.push(currentVertex); //push currentVertex to end result array

            //this.adjacencyList[currentVertex] gives us an array of all neighbors of currentVertex
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) { //if neighbor hasn't been visited
                    visited[neighbor] = true; //add neighbor to visited obj 
                    stack.push(neighbor); //push neighbor to stack
                }
            });
        }
        return result;
    }

    breadthFirst(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;
        while (queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            })
        }
        return result;
    }
}

let g = new Graph();

//City Graph
// g.addVertex('Dallas');
// g.addVertex('Tokyo');
// g.addVertex('Aspen');
// g.addVertex('Los Angeles');
// g.addVertex('Hong Kong');
// g.addEdge('Dallas', 'Tokyo');
// g.addEdge('Dallas', 'Aspen');
// g.addEdge('Hong Kong', 'Tokyo');
// g.addEdge('Hong Kong', 'Dallas');
// g.addEdge('Los Angeles', 'Hong Kong');
// g.addEdge('Los Angeles', 'Aspen');

//Letter Graph
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

//Graph Diagram
    //    A
    //  /   \ 
    // B     C
    // |     |
    // D --- E
    //  \   /
    //    F




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


//removing an edge
    //adjacencyList start
        // { 
        //     'Tokyo': ['Dallas'],
        //     'Dallas': ['Tokyo', 'Aspen'],
        //     'Aspen': ['Dallas']
        // }
    
    //g.removeEdge('Tokyo', 'Dallas');

    //adjacencyList end
        // { 
        //     'Tokyo': [],
        //     'Dallas': ['Aspen'],
        //     'Aspen': ['Dallas']
        // }

//removing a vertex 
    //adjacencyList start
        // {
        //     'Tokyo': ['Dallas', 'Hong Kong'],
        //     'Dallas': ['Tokyo', 'Aspen', 'Hong Kong', 'Los Angeles'],
        //     'Aspen': ['Dallas'],
        //     'Hong Kong': ['Tokyo', 'Dallas', 'Los Angeles'],
        //     'Los Angeles': ['Hong Kong', 'Dallas']
        // }

    //g.removeVertex('Hong Kong');

    //adjacencyList end
        // {
        //     'Tokyo': ['Dallas'],
        //     'Dallas': ['Tokyo', 'Aspen', 'Los Angeles'],
        //     'Aspen': ['Dallas'],
        //     'Los Angeles': ['Dallas']
        // }

//dfsRecursive
    //dfs - basically starts at a given vertex. Then goes to neighbor of vertex, then goes to neighbor of that vertex, then goes to neighbor of that vertex...
    //it keeps visiting neighbors until it reaches an end point where it has visited all neighors of a certain vertex
    //it will go back to a previous vertex and visits a different neighbor than the one that it visited

//dfs-iterative
    //utilizes a stack (implemented as an array) - first in, last out
    //stack -> uses push and pop

//bfs
    //visiting all direct neighbors of a vertex first before visiting a neighbor's neighbor
    //utilizes a queue (implemented as an array) - first in, first out
    //queue -> uses push and shift 