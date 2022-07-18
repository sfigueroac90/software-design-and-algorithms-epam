import { Point } from "./Point";

const point1 = new Point();
const point2 = new Point(10, 20);

console.log(point1);
console.log(point2.toString());
console.log(point1.distance());
console.log(point2.distance());
console.log(point1.distance(10, 10));
console.log(point2.distance(10, 10));
console.log(point1.distance(point2));
console.log(point2.distance(point1));
