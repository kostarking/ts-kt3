import { UnitDecorator } from "./UnitDecorator";
import { Unit } from "../units/Unit";

export class Poison extends UnitDecorator {
  private poisonDamage: number;

  constructor(unit: Unit, poisonDamage: number = 5) {
    super(unit);
    this.poisonDamage = poisonDamage;
  }

  public getDescription(): string {
    return `Ядовитый ${this.wrappedUnit.getDescription()} с периодическим уроном от яда ${this.poisonDamage}`;
  }
}
