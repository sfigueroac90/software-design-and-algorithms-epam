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
    return `Triangle[${this.points
      .map((p, i) => `v${i + 1}=${p.toString()}`)
      .join(",")}]`;
  }

  getType(): string {
    const [l1, l2, l3] = this.getBorders().map((b) => b.toFixed(2));

    if (l1 === l2 && l2 === l3) {
      return "equilateral triangle";
    }

    if (l1 === l2 || l1 === l3 || l2 == l3) {
      return "isosceles triangle";
    }

    return "scalene triangle";
  }
}
