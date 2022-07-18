import { Consumabe } from "./Consumable";

// your code goes here
export class Pizza extends Consumabe {
  private numberOfSlices: number;
  private slicesEaten: number;

  constructor(numberOfSlices: number, spoiled: boolean) {
    super("Pizza", 0, 0, spoiled);
    this.numberOfSlices = numberOfSlices;
    this.slicesEaten = 0;
  }

  protected eat() {
    if (this.slicesEaten < this.numberOfSlices) {
      this.slicesEaten++;
      if (this.slicesEaten >= this.numberOfSlices) {
        this.setConsumed(true);
      }
    }

    return "You eat a slice of the Pizza";
  }
}
