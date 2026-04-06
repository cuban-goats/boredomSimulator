import { Stats } from "./Stats.ts"
import { Upgrade } from "./Upgrade.ts"

export class Player {
  name: string;
  stats: Stats;

  constructor(name: string) {
    this.name = name;
    this.stats = new Stats();
  }

  addClickToScore(): void {
    this.stats.setScore(this.stats.getScore() + this.stats.getClick() * this.stats.getClickMultiplier());
  }

  addBulidingIncomeToScore(): void {
    this.stats.setScore(this.stats.getScore() + this.stats.getAdditionToScore());
  }
  
  buyUpgrade(upgrade: Upgrade): void {
    if (this.stats.getScore() >= upgrade.cost) {
      this.stats.setScore(this.stats.getScore() - upgrade.cost);
      upgrade.count++;
      upgrade.increasePrice();
    }
  }
}
