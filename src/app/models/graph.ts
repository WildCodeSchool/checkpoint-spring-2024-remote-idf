
export interface Graph {
  nodes: Node[];
}

export interface Node {
  name: string;
  shortestPath: (ShortestPath2 | ShortestPath22 | ShortestPath)[];
  distance: number;
  adjacentNodes: AdjacentNodes3;
}

export interface ShortestPath22 {
  name: string;
  shortestPath: (ShortestPath2 | ShortestPath)[];
  distance: number;
  adjacentNodes: AdjacentNodes3;
}

export interface AdjacentNodes3 {
  'com.rush.rush.dijkstra.Node@14936a41'?: number;
  'com.rush.rush.dijkstra.Node@3efc16e6'?: number;
  'com.rush.rush.dijkstra.Node@3cdc7f0e'?: number;
  'com.rush.rush.dijkstra.Node@67eb51'?: number;
  'com.rush.rush.dijkstra.Node@62c90555'?: number;
}

export interface ShortestPath2 {
  name: string;
  shortestPath: ShortestPath[];
  distance: number;
  adjacentNodes: AdjacentNodes2;
}

export interface AdjacentNodes2 {
  'com.rush.rush.dijkstra.Node@14936a41'?: number;
  'com.rush.rush.dijkstra.Node@3efc16e6'?: number;
  'com.rush.rush.dijkstra.Node@3cdc7f0e'?: number;
  'com.rush.rush.dijkstra.Node@67eb51'?: number;
}

export interface ShortestPath {
  name: string;
  shortestPath: any[];
  distance: number;
  adjacentNodes: AdjacentNodes;
}

export interface AdjacentNodes {
  'com.rush.rush.dijkstra.Node@14936a41': number;
  'com.rush.rush.dijkstra.Node@3efc16e6': number;
}
