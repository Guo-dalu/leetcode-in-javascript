type DijkstraMap = {
  [ node: string ]: {
    [node: string]: number
  }
}

const problem: DijkstraMap = {
  S: { A: 5, B: 2 },
  A: { C: 4, D: 2 },
  B: { A: 8, D: 7 },
  C: { D: 6, F: 3 },
  D: { F: 1 },
  F: {}
};

 // initial Costs: {F: Infinity, A: 5, B: 2} which is the costs for the start(S) to each linked nodes
type Costs = {
   [node: string]: number
 }

const getClosestNode = (costs:Costs, visited: string[]):string | null => {
  return Object.keys(costs).reduce((lowest: string | null, node:string) => {
    if (lowest === null || costs[ node ] < costs[ lowest ]) {
      if (!visited.includes(node)) {
        lowest = node
      }
    }
    return lowest
  }, null)
}

type DikstraResult = {
  distance: number,
  path: string[]
}

type Parents = {
  [node: string]: string | null
}

const dijkstra = (graph: DijkstraMap, start: string, finish: string): DikstraResult => {
  const costs:Costs = { ...graph[ start ], F: Infinity }
   
  // the shortest path from start to end
  const parents:Parents = { F: null }
  for (const child in graph[start]) {
    parents[ child ] = start
    // {F: null, A: 'S', B: 'S'}
  }

  const visited:string[] = []

  let node = getClosestNode(costs, visited)

  while (node !== null) {
    const cost:number = costs[node]
    const children = graph[ node ]
    for (const child in children) {
      const newCost = cost + children[ child ]
      if (!costs[ child ] || newCost < costs[ child ]) {
        costs[ child ] = newCost
        parents[child] = node
      }
    }
    visited.push(node)
    node = getClosestNode(costs, visited)
  }

  const optimalPath = [finish]
  let parent = parents[finish]
  
  while (parent) {
    optimalPath.push(parent)
    parent = parents[parent]
  }
 
  const results = {
    distance: costs[finish],
    path: optimalPath.reverse()
  };

  return results;
}

console.log(dijkstra(problem, 'S', 'C'));