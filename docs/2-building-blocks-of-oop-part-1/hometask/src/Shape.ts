import { Point } from "./Point";

export abstract class Shape {
  protected color: string;
  protected filled: boolean;
  protected points: Point[];

  constructor(points: Point[]);
  constructor(points: Point[], color: string, filled: boolean);
  constructor(points: Point[], color?: string, filled?: boolean) {
    if (!points || points.length < 3) {
      throw "Should use at least 3 points";
    }

    this.points = [...points];

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
      this.filled ? "filled" : "not filled"
    }. Points: ${this.points.map((p) => p.toString()).join(", ")}.`;
  }

  getPerimeter() {
    return this.getBorders().reduce((p, c) => p + c);
  }

  getBorders() {
    return this.points.map((p, i, arr) =>
      p.distance(i + 1 < arr.length ? arr[i + 1] : arr[0])
    );
  }
}
