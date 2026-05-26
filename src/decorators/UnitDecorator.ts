import { Unit } from "../units/Unit";

export abstract class UnitDecorator extends Unit {
  protected wrappedUnit: Unit;

  constructor(unit: Unit) {
    super(unit.name, unit.damage);
    this.wrappedUnit = unit;
  }

  public get name(): string {
    return this.wrappedUnit.name;
  }

  public get damage(): number {
    return this.wrappedUnit.damage;
  }

  public abstract getDescription(): string;
}
