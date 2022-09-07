import { Dijkstra, DijksTraBase } from './Dijkstra';
import { Edge, Info, Vertex, WeightedGraph, WeightedGraphObject } from "./WeighTedGraph";

const vertices = [
    new Vertex('1'),
    new Vertex('2'),
    new Vertex('3'),
    new Vertex('4'),
    new Vertex('5')
  ];

  const [vertex1,vertex2,vertex3,vertex4,vertex5] = vertices

  const edges = [
    new Edge(vertex1, vertex4, 3),
    new Edge(vertex1, vertex2, 5),
    new Edge(vertex1, vertex3, 4),
    new Edge(vertex2, vertex4, 6),
    new Edge(vertex2, vertex3, 5),
  ];

  const graph: WeightedGraph<Vertex> & Info = new WeightedGraphObject();

  vertices.forEach(vertice => graph.addVertex(vertice));
  edges.forEach(edge => graph.addEdge(edge.from, edge.to, edge.weight));

  const dijkstra:Dijkstra<Vertex> = new DijksTraBase(graph);

  console.log(dijkstra.findShortestPath(vertex4, vertex3)); // { path: ['4', '1', '3'], distance: 7 }
  console.log(dijkstra.findShortestPath(vertex1, vertex5)); // { path: [], distance: Infinity }
  console.log(dijkstra.findShortestPath(vertex1, vertex1)); // { path: ['1'], distance: 0 }

  console.log(dijkstra.findAllShortestPaths(vertex4));
  /*
   {
     '1': { path: ['4', '1'], distance: 3 },
     '2': { path: ['4', '2'], distance: 6 },
     '3': { path: ['4', '1', '3'], distance: 7 },
     '5': { path: [], distance: Infinity }
   }
  */

  