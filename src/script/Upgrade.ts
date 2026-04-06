export class Upgrade {
  name: string;
  cost: number;
  count: number;
  constructor(name: string, cost: number) {
    this.name = name;
    this.cost = cost;
    this.count = 0;
  }

  increasePrice(): void {
    this.cost = this.cost + (0.5 * this.count);
  }
}

export class Building extends Upgrade {
  additionToScore: number;
  count: number;

  constructor(name: string, cost: number, additionToScore: number) {
    super(name, cost);
    this.additionToScore = additionToScore;
    this.count = 0;
  }
}

export class ClickingUpgrade extends Upgrade {
clickingMulitplier: number;

  constructor(name: string, cost: number, clickingMultiplier: number) {
    super(name, cost);
    this.clickingMulitplier = clickingMultiplier;
  }
}
