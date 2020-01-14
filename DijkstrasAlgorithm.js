//Algorithm acts upon a weighted graph 
//Uses a priority queue (binary heap)

//The importance of Dijkstra's Algorithm

//Implement a weighted graph

//Implement Dijkstra's Algorithm using a naive priority queue

//Implement Dijkstra's Algorithm using a binary heap priority queue

//What is it?
    //Finds the shortest path between two vertices on a graph 
    //Fastest way to get from point A to point B

////////////////////////////////

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

    Dijkstra(start, finish) {
        const nodes = new PriorityQueue(); //create new priorityQueue
        const distances = {}; //stores current shortest distance value (values are numerical/weighted) to a particular vertex
        const previous = {}; //stores quickest path through a particular vertex (values are vertex)
        let path = []; //returns array of sequence of vertices at the end
        let smallest; //this variable will be used to store node/vertex with lowest priority value in priorityQueue

        //build initial state 
        for (let vertex in this.adjacencyList) { //loop through each vertex in adjacencyList
            if (vertex === start) { //if vertex is start vertex
                distances[vertex] = 0;  //put vertex into distances obj and set value to 0. Because distance of vertex A to vertex A is Zero (0).
                nodes.enqueue(vertex, 0); //add vertex to priorityQueue and set priority to 0 for start vertex
                // 0 value will not change
            } else {
                distances[vertex] = Infinity; //if vertex is not start vertex, put vertex into distances obj and set value to Infinity
                nodes.enqueue(vertex, Infinity); //add vertex to priorityQueue and set priority to infinity
                // infinity value will change
            }

            //null value for start vertex will stay null
            //all other values for other vertices will change to reflect previous vertex that will lead to shortest path
            previous[vertex] = null; //set quickest path to be null for all vertices at the start. 
        }

        //while there are nodes/vertices to visit in priority queue
        while (nodes.values.length) {
            smallest = nodes.dequeue().val; //dequeue will shift node from front of priority queue (which should have lowest priority of all nodes) and store node's val into 'smallest' variable
            
            //exit condition
            if (smallest === finish) { //if smallest is the finish vertex - we exit out of while loop
                //we reached exit condition 
                //create and return array of order of nodes we go through for shortest path
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }

            //loop over the neighbors of smallest 
            if (smallest || distances[smallest] !== Infinity) {
                //look at all neighbors of smallest
                for (let neighbor in this.adjacencyList[smallest]) {
                    let nextNode = this.adjacencyList[smallest][neighbor]; //neighboring node of smallest
                    //calculate new distance to neighboring node
                    let candidate = distances[smallest] + nextNode.weight; //add smallest's distance and weight of nextNode 
                    let nextNeighbor = nextNode.node;

                    if (candidate < distances[nextNeighbor]) {
                        distances[nextNeighbor] = candidate; //updating new smallest distance to neighbor
                        previous[nextNeighbor] = smallest; //the way we get to nextNeighbor is through smallest. 
                        nodes.enqueue(nextNeighbor, candidate); //enqueue nextNeighbor (nextNeighbor is a _______? ) with candidate (candidate is a distance/numerical value)
                    }
                }
            }
        }
        return path.concat(smallest).reverse(); //concat(smallest) to add 'A' the starting node to the path array. 
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


graph.Dijkstra('A', 'E'); //shortest path from A to E 