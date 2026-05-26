import { Unit } from "./Unit";

export class Archer extends Unit {
  constructor() {
    super("Лучник", 10);
  }

  public getDescription(): string {
    return `лучник, базовый урон ${this._damage}`;
  }
}
