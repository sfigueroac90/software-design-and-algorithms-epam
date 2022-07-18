import { Item } from "./Item";

// your code goes here
export abstract class Consumabe extends Item {
  private consumed: boolean;
  private spoiled: boolean;

  constructor(name: string, value: number, weight: number, spoiled: boolean) {
    super(name, value, weight);
    this.consumed = false;
    this.spoiled = spoiled;
  }

  protected abstract eat(): string;

  public use() {
    if (!this.consumed && !this.spoiled) {
      return this.eat();
    }

    if (!this.consumed && this.spoiled) {
      return this.eat() + "\n You fell sick";
    }

    if (this.consumed) {
      return `There is nothing left ${this.getName()} to consume`;
    }
  }

  public isConsumed() {
    return this.consumed;
  }

  setConsumed(consumed: boolean) {
    this.consumed = consumed;
  }

  isSpoiled() {
    this.spoiled;
  }

  public toString(): string {
    return (
      `${this.getName()} - Consumed: ${this.consumed},` +
      ` Spoiled: ${this.spoiled}`
    );
  }
}
