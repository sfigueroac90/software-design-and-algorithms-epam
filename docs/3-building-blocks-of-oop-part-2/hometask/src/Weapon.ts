import { Item } from "./Item";

// your code goes here
export abstract class Weapon extends Item {
  protected MODIFIER_CHANGE_RATE: number = 0.05;
  protected baseDamage: number;
  protected damageModifier: number;
  protected baseDurability: number;
  protected durabilityModifier: number;

  constructor(
    name: string,
    baseDamage: number,
    baseDurability: number,
    value: number,
    weight: number
  ) {
    super(name, value, weight);
    this.baseDamage = baseDamage;
    this.baseDurability = baseDurability;
    this.damageModifier = 0;
    this.durabilityModifier = 0;
  }

  abstract polish(): void;

  getDamage(): number {
    return this.baseDamage + this.damageModifier;
  }

  getDurability(): number {
    return this.baseDurability + this.durabilityModifier;
  }

  toString(): string {
    return (
      `${this.getName()} - Value: ${this.getValue()}, Weight: ${this.getWeight()},` +
      ` Damage: ${this.getDamage()}, Durability: ${this.getDurability() * 100}%`
    );
  }

  use() {
    if (this.getDurability() <= 0) {
      return `You can't use the ${this.getName()}, it is broken.`;
    }

    this.durabilityModifier =
      this.durabilityModifier - this.MODIFIER_CHANGE_RATE;

    const baseResult = `You use the ${this.getName()}, dealing ${this.getDamage()} points of damage.`;

    const noDurabilityResult = "  The hammer breaks.";

    return this.getDurability() > 0
      ? baseResult
      : baseResult + noDurabilityResult;
  }

  setModifierChangeRate(modifierChangeRate: number) {
    this.MODIFIER_CHANGE_RATE = modifierChangeRate;
  }
}
