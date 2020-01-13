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


var graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');

