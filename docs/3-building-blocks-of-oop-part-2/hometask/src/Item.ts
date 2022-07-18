import { Comparable } from './Comparable';


export abstract class Item implements Comparable<Item> {
  private id: number;

  private static counter = 0;

  private value: number;
  private name: string;
  private weight: number;

  private static reset() {
    Item.counter = 0;
  }

  // your code goes here
  constructor(name: string, value: number, weight: number) {
    this.id = Item.counter++;
    this.name = name;
    this.value = value;
    this.weight = weight;
  }

  public abstract use(): string | undefined;

  get numberOfItems() {
    return Item.counter;
  }

  public compareTo(other: Item): number {
    // your code goes here
    if (this.value > other.value) {
      return 1;
    }

    if (this.value < other.value) {
      return -1;
    }

    return this.name.toLowerCase().localeCompare(other.name.toLowerCase());
  }

  public toString() {
    return `${this.name} - Value: ${this.value}, Weight: ${this.weight}`;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getValue() {
    return this.value;
  }

  getWeight() {
    return this.weight;
  }

  setId(id: number) {
    this.id = id;
  }

  setName(name: string) {
    this.name = name;
  }

  setValue(value: number) {
    this.value = value;
  }

  setWeight(weight: number) {
    this.weight = weight;
  }
}
