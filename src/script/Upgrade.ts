class Upgrade {
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
