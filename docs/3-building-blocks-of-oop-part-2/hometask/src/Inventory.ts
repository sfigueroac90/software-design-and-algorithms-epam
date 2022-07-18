import { ItemComparator } from "./ItemComparator";
import { Item } from "./Item";

// your code goes here
export class Inventory {
  private items: Item[];

  addItem(item: Item) {
    this.items.push(item);
  }

  constructor() {
    this.items = [];
  }

  sort(): void;
  sort(compartor: ItemComparator): void;
  sort(comparator?: ItemComparator): void {
    if (comparator) {
      this.items.sort(comparator.compare);
      return;
    }

    this.items.sort((a, b) => a.compareTo(b));
  }

  public toString(): string {
    return this.items.map((i) => i.toString()).join(", ");
  }
}
