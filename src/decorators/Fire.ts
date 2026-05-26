import { UnitDecorator } from "./UnitDecorator";
import { Unit } from "../units/Unit";

export class Fire extends UnitDecorator {
  private fireDamage: number;

  constructor(unit: Unit, fireDamage: number = 10) {
    super(unit);
    this.fireDamage = fireDamage;
  }

  public getDescription(): string {
    return `Огненный ${this.wrappedUnit.getDescription()} с дополнительным уроном от огня ${this.fireDamage}`;
  }
}
