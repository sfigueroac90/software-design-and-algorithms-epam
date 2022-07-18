import { Weapon } from "./Weapon";

export class Sword extends Weapon {
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
    if ((newDamageModifier + this.baseDamage <= this.baseDamage * 1, 25)) {
      this.damageModifier = newDamageModifier;
      return;
    }

    this.damageModifier = 0.25 * this.baseDamage;
  }
}
