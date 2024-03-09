class UndirectedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  bfs(start) {
    let queue = [];
    let visited = {};
    let result = [];
    queue.push(start);
    visited[start] = true;
    while (queue.length) {
      let currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }

  showGraph() {
    console.log(this.adjacencyList);
  }
}

let graph = new UndirectedGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addVertex("G");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");

graph.addEdge("C", "E");
graph.addEdge("C", "F");

graph.addEdge("F", "G");

graph.showGraph();

let result = graph.bfs("A");
console.log(result);
