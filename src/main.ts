import { Warrior, Wizard, Archer, Unit } from "./units";
import { Fire, Frost, Poison } from "./decorators";

function randomChoice<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createRandomBaseUnit(): Unit {
  const unitCreators = [
    () => new Warrior(),
    () => new Wizard(),
    () => new Archer(),
  ];
  return randomChoice(unitCreators)();
}

function applyRandomDecorators(unit: Unit): Unit {
  const decorators = [
    (u: Unit) => new Fire(u, randomInt(5, 20)),
    (u: Unit) => new Frost(u, randomInt(10, 50)),
    (u: Unit) => new Poison(u, randomInt(3, 15)),
  ];

  const decoratorCount = randomInt(1, 2);

  let decoratedUnit = unit;
  const usedDecorators: string[] = [];

  for (let i = 0; i < decoratorCount; i++) {
    const decorator = randomChoice(decorators);
    decoratedUnit = decorator(decoratedUnit);
  }

  return decoratedUnit;
}

function generateRandomUnits(count: number): Unit[] {
  const units: Unit[] = [];

  for (let i = 0; i < count; i++) {
    let unit = createRandomBaseUnit();

    unit = applyRandomDecorators(unit);
    units.push(unit);
  }

  return units;
}

console.log("=".repeat(60));
console.log("ГЕНЕРАТОР СЛУЧАЙНЫХ ЮНИТОВ");
console.log("=".repeat(60));
console.log();

const units = generateRandomUnits(8);

units.forEach((unit, index) => {
  console.log(`${index + 1}. ${unit.getDescription()}`);
});

console.log();
console.log("=".repeat(60));
console.log("ПРИМЕРЫ КОМБИНАЦИЙ ДЕКОРАТОРОВ");
console.log("=".repeat(60));
console.log();

const fireWarrior = new Fire(new Warrior(), 10);
console.log(`Огненный воин:  ${fireWarrior.getDescription()}`);

const frostWizard = new Frost(new Wizard(), 25);
console.log(`Морозный маг:   ${frostWizard.getDescription()}`);

const poisonArcher = new Poison(new Archer(), 7);
console.log(`Ядовитый лучник: ${poisonArcher.getDescription()}`);

const firePoisonWarrior = new Poison(new Fire(new Warrior(), 12), 8);
console.log(`Огненно-ядовитый воин: ${firePoisonWarrior.getDescription()}`);

const frostFireWizard = new Fire(new Frost(new Wizard(), 40), 15);
console.log(`Морозно-огненный маг:  ${frostFireWizard.getDescription()}`);

console.log();
