import { Unit } from "./Unit";

export class Wizard extends Unit {
  constructor() {
    super("Маг", 12);
  }

  public getDescription(): string {
    return `маг, базовый урон ${this._damage}`;
  }
}
