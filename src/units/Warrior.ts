import { Unit } from "./Unit";

export class Warrior extends Unit {
  constructor() {
    super("Воин", 15);
  }

  public getDescription(): string {
    return `воин, базовый урон ${this._damage}`;
  }
}
