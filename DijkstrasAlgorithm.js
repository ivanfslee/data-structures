//Algorithm acts upon a weighted graph 
//Uses a priority queue (binary heap)

//The importance of Dijkstra's Algorithm

//Implement a weighted graph

//Implement Dijkstra's Algorithm using a naive priority queue

//Implement Dijkstra's Algorithm using a binary heap priority queue

//What is it?
    //Finds the shortest path between two vertices on a graph 
    //Fastest way to get from point A to point B


class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) { //if vertex not int adjacencyList
            this.adjacencyList[vertex] = [];  //add vertex in with an empty array as value
        }
    }

    addEdge(vertex1, vertex2, weight) { //takes an additional weight parameter
        this.adjacencyList[vertex1].push({node: vertex2, weight}); //weight -> weight: weight (es2015 syntax)
        this.adjacencyList[vertex2].push({node: vertex1, weight}); //weight -> weight: weight (es2015 syntax
    }

    //Vertex 'A' with edge to 'B' looks like this with weight 
    // {
    //     A: [{node: 'B', weight: 10}]
    // }
}


//this implementation is not as good as binary heap implementation (which we will do later)
//we need a priority queue in order to find the next lowest vertex to our origin 
//when we dequeue (after sorting the vertices by priority), this will give us the lowest vertex to origin 
class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        this.values.push({val, priority});
        this.sort();
    }

    dequeue() {
        return this.values.shift();
    }

    sort() { //sort method used internally
        this.values.sort((a, b) => a.priority - b.priority); //we are sorting here so O(N * log(N))
    }
}



var graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);
