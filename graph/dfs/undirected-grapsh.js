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

  dfs(start) {
    let stack = [];
    let result = [];
    let visited = {};
    stack.push(start);
    while (stack.length) {
      let currentVertex = stack.pop();
      if (!visited[currentVertex]) {
        visited[currentVertex] = true;
        result.push(currentVertex);
        this.adjacencyList[currentVertex].forEach((neighbor) => {
          if (!visited[neighbor]) {
            stack.push(neighbor);
          }
        });
      }
    }
    return result;
  }

  showList() {
    console.log(this.adjacencyList);
  }
}

let graph = new UndirectedGraph();
graph.addVertex("S");
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addEdge("S", "A");
graph.addEdge("S", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "B");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("C", "D");
graph.addEdge("D", "E");

graph.showList();

let res = graph.dfs("S");
console.log(res);
