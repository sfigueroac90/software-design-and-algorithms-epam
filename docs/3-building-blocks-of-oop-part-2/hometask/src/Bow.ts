import { Weapon } from "./Weapon";

export class Bow extends Weapon {
  constructor(
    baseDamage: number,
    baseDurability: number,
    value: number,
    weight: number
  ) {
    super("Sword", baseDamage, baseDurability, value, weight);
  }

  polish(): void {
    const newDamageModifier = this.damageModifier + this.MODIFIER_CHANGE_RATE;
    if (newDamageModifier + this.baseDamage <= 1) {
      this.damageModifier = newDamageModifier;
      return;
    }

    this.damageModifier = 1 - this.baseDamage;
  }
}
