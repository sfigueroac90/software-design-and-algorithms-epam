import { Point } from "./Point";

export abstract class Shape {
  protected color: string;
  protected filled: boolean;
  protected points: Point[];

  constructor(points: Point[]);
  constructor(points: Point[], color: string, filled: boolean);
  constructor(points: Point[], color?: string, filled?: boolean) {
    this.points = points;

    while (this.points.length < 3) this.points.push(new Point());

    if (!color) {
      this.color = "green";
      this.filled = true;
      return this;
    }

    this.color = color;
    this.filled = filled !== undefined ? filled : true;
  }

  toString() {
    return `A Shape with color of ${this.color} and ${
      this.filled ? "filled" : "Not filled"
    }. Points: ${this.points.map((p) => p.toString()).join(",")}.`;
  }

  getPerimeter() {
    return this.points.reduce(
      (p, c, i, arr) => p + c.distance(i + 1 < arr.length ? arr[i] : arr[0]),
      0
    );
  }
}
