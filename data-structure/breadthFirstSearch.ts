interface Graph {
  [key: string]: string[];
}


const bfsRecursive = (graph: Graph, queue: string[], visited: string[]): string[] => {
  if (queue.length === 0) {
    return visited
  }
  const node = queue.shift()!
  if (!visited.includes(node)) {
    visited.push(node)
    graph[ node ].forEach((leaf: string) => {
      if (!visited.includes(leaf) && !queue.includes(leaf)) {
        queue.push(leaf)
      }
    })
  }
  return bfsRecursive(graph, queue, visited)
}

const breadthFirstSearch = (graph: Graph, source: string): string[] => {
  if (Object.keys(graph).length === 0) {
    return []
  }
  const visited: string[] = [];
  const queue: string[] = [ source ];

  while (queue.length !== 0) {
    const node = queue.shift()!
    if (!visited.includes(node)) {
      visited.push(node)
      graph[ node ].forEach(v => {
        if (!visited.includes(v) && !queue.includes(v)) {
          queue.push(v)
        }
      })
    }
  }
  
  return visited
  //return bfsRecursive(graph, queue, visited);
};

// Test case
console.log(
  breadthFirstSearch(
    {
      A: ['D', 'E'],
      B: ['A', 'B', 'C', 'D', 'E'],
      C: [],
      D: ['B'],
      E: ['C'],
    },
    'A',
  ),
); // prints ["A", "D", "E", "B", "C"]