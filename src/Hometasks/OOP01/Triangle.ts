import { Point } from "./Point";
import { Shape } from "./Shape";

export class Triangle extends Shape {
  constructor(points: Point[]);
  constructor(points: Point[], color: boolean, filled: string);
  constructor(p1: Point, p2: Point, p3: Point, filled: boolean, color: string);
  constructor(...args) {
    if (Array.isArray(args[0])) {
      const [points, color, filled] = args[0];
      super(points, color, filled);
      return this;
    }

    const [p1, p2, p3, filled, color] = args;
    const points = [p1, p2, p3];
    super(points, color, filled);
  }

  toString(): string {
    return `Triangle ${this.points
      .map((p, i) => `v${i}=${p.toString()}`)
      .join(",")}]`;
  }
}
