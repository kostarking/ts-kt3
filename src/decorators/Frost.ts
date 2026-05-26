import { UnitDecorator } from "./UnitDecorator";
import { Unit } from "../units/Unit";

export class Frost extends UnitDecorator {
  private slowdown: number;

  constructor(unit: Unit, slowdown: number = 30) {
    super(unit);
    // Процент замедления (например, 30%)
    this.slowdown = slowdown;
  }

  public getDescription(): string {
    return `Морозный ${this.wrappedUnit.getDescription()} с эффектом замедления ${this.slowdown}%`;
  }
}
