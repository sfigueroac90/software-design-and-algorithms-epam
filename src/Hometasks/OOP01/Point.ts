export class Point {
  public x: number;
  public y: number;

  constructor(x: number, y: number);
  constructor();
  constructor(x?: number, y?: number) {
    //this.toString = this.toString.bind(this);

    if (x && y) {
      this.x = x;
      this.y = y;
      return this;
    }

    this.x = 0;
    this.y = 0;
  }

  private distanceCalc(x: number, y: number) {
    return Math.sqrt(x * x + y * y);
  }

  public distance(): number;
  public distance(p: Point): number;
  public distance(x: number, y: number): number;
  public distance(...args: Point[] | number[]) {
    if (args.length === 0) {
      return this.distanceCalc(this.x, this.y);
    }

    if (args[0] instanceof Point) {
      const point = args[0] as Point;
      return this.distanceCalc(point.x, point.y);
    }

    if (typeof args[0] === "number" && typeof args[1] === "number") {
      const [x, y] = args as number[];
      return this.distanceCalc(x, y);
    }
  }

  get [Symbol.toStringTag]() {
    return "Point";
  }
  public toString(): string {
    return `(${this.x},${this.y})`;
  }
}
