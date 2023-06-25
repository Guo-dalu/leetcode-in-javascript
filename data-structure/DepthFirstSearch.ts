interface Graph {
  [key: string]: string[];
}


const depthFirstSearch = (graph: Graph, source: string): string[] => {
  if (Object.keys(graph).length === 0) {
    return []
  }
  const visited: string[] = [];
  const stack: string[] = [ source ];

  while (stack.length !== 0) {
    const node = stack.pop()!
    if (!visited.includes(node)) {
      visited.push(node)
      graph[ node ].reverse().forEach(v => {
        if (!visited.includes(v)) {
          stack.push(v)
        }
      })
    }
  }
  
  return visited
};


const graph1 = {
  A: ['B', 'C', 'D'],
  B: ['E', 'F'],
  C: ['G', 'H'],
  D: ['I', 'J'],
  E: ['D'],
  F: [],
  G: [],
  H: [],
  I: [],
  J: [],
};
depthFirstSearch(graph1, 'A'); // ['A', 'B', 'E', 'D', 'I', 'J', 'F', 'C', 'G', 'H']
depthFirstSearch(graph1, 'B'); // ['B', 'E', 'D', 'I', 'J', 'F']

const graph2 = {
  'A': ['B', 'C'],
  'B': ['D', 'E'],
  'C': ['F', 'G'],
  'D': [],
  'E': [],
  'F': [],
  'G': [],
};
depthFirstSearch(graph2, 'A'); // ['A', 'B', 'D', 'E', 'C', 'F', 'G']
depthFirstSearch(graph2, 'E'); // ['E']