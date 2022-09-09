
import { WeightedGraphObject } from 'WeighTedGraph';
import { Vertex, WeightedGraph, Info } from './WeighTedGraph';
interface Path {
    path: string[];
    distance: number | string;
}
  
export interface Dijkstra<T> {
    findShortestPath(vertex1: T, vertex2: T): Path;
    findAllShortestPaths(vertex: T): Record<string, Path>;
}

const sortQ = (vertices:Vertex[]) => vertices.sort((v1,v2)=>v1.d-v2.d)

function w(u:Vertex,v:Vertex){
    if(u.key === v.key){
        return 0;
    }
    return v.edges.find(e => e.from.key === u.key || e.to.key === u.key ).weight;
}
/**
 * Init weighted graph vertices to have maximum distance.
 */
function initSingleSource(G:WeightedGraphObject, s:Vertex) {
    for (const v of G.vertices) {
      v.d = Number.MAX_SAFE_INTEGER;
      v.p = null;
    }
        s.d = 0;
  } 
  
  /**
 * Check if new distance is shorter than previous one
 */
  function relax(u:Vertex, v:Vertex, w) {
    if (v.d > u.d + w(u, v)) {
      v.d = u.d + w(u, v);
      v.p = u;
    }
  }


/**
 * DijkstrAlgorithm
 * Run dijstkra algorithm and set distances in Weigthed graph object, inplace.
 */
function DijkstrAlgorithm(G:WeightedGraphObject, w, s:Vertex) {
    initSingleSource(G, s);
    const S: Vertex[]=[];
    const Q = sortQ([...G.vertices]); // build queue with priorities according to d values of vertices
  
    while (Q.length) {
      const u = Q.shift()
      S.push(u);
  
      for (const vertex of G.adj(u)) {
        relax(u, vertex, w);
      }
    }
}

/**
 * Generate Path object with path array and distance
 */
function getPath( vertex2: Vertex):Path{
    if(vertex2.d == Number.MAX_SAFE_INTEGER){
        return { path: [], distance: Number.POSITIVE_INFINITY}
    }

    const path: string[] = [];
    let currentVert = vertex2;
    path.push(vertex2.key)
    while(currentVert.p && currentVert.d !== Number.MAX_SAFE_INTEGER){
        path.push(currentVert.p.key);
        currentVert = currentVert.p
    }
   
    path.reverse()
    return {path,distance: vertex2.d}
}

export class DijksTraBase implements Dijkstra<Vertex>{
    private graph: WeightedGraph<Vertex>
    constructor(graph:WeightedGraph<Vertex>){
        this.graph = graph;
    }

    findShortestPath(vertex1: Vertex, vertex2: Vertex) { 
        DijkstrAlgorithm(this.graph as WeightedGraphObject,w,vertex1);  
        return getPath(vertex2)
    }
    findAllShortestPaths(vertex: Vertex): Record<string, Path> {
        DijkstrAlgorithm(this.graph as WeightedGraphObject,w,vertex);  
        const paths = sortQ((this.graph as WeightedGraphObject).vertices).filter(v => v.key !== vertex.key)
        return paths.reduce((p,v)=>{
            p[v.key] = getPath(v)
            return p;
        },{})
    }
}




