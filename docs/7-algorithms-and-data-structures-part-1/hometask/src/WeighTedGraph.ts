export interface Info {
  info():string;
}

export interface WeightedGraph<T> {
    addVertex(vertex:Vertex): void;
    addEdge(vertex1: T, vertex2: T, weight: number): void;
    adj(vertex1:T)
}

export class Vertex implements Info{
  public key:string;
  public p:Vertex
  public d: number;
  public edges: Edge[]=[];
   constructor( key:string){
    this.key = key;
   }
   info(){
    return `k:${this.key} Edges: ${this.edges.map(e=>e.info()).join(',')}`
   }
   
}

export class Edge implements Info{
  public from:Vertex
  public to: Vertex
  public weight: number

  constructor(vertex1:Vertex,vertex2:Vertex,weight:number){
    this.from = vertex1;
    this.to = vertex2;
    this.weight = weight;
  }
  info(){
    return `E(from:${this.from.key},to:${this.to.key},w:${this.weight})`
  }
}

export class WeightedGraphObject implements WeightedGraph<Vertex>,Info {
  public vertices: Vertex[]=[]
  public edges: Edge[]=[];

  addVertex(vertex:Vertex){
    this.vertices.push(vertex);
  }

  addEdge(vertex1: Vertex, vertex2: Vertex, weight: number){
    const newEdge =  new Edge(vertex1,vertex2,weight);
    this.vertices.find(v => v.key === vertex1.key).edges.push(newEdge)
    this.vertices.find(v => v.key === vertex2.key).edges.push(newEdge)
    this.edges.push(newEdge);
  }

  adj(vertex: Vertex) {
    return this.vertices.filter(v => v.key !== vertex.key && v.edges.filter(e => e.from.key === vertex.key || e.to.key === vertex.key).length>0)
  }

  info(){
    return `Vertices: \n${this.vertices.map(v => v.info()).join('\n')}`
  }

}