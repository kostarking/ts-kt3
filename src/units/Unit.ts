export abstract class Unit {
  protected _name: string;
  protected _damage: number;

  constructor(name: string, damage: number) {
    this._name = name;
    this._damage = damage;
  }

  public get name(): string {
    return this._name;
  }

  public get damage(): number {
    return this._damage;
  }

  public abstract getDescription(): string;
}
