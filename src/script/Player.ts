class Player {
  name: string;
  stats: Stats;
  

  constructor(name: string) {
    this.name = name;
    this.stats = new Stats();
  }

  addClickToScore(): void {
    this.stats.score = this.stats.score + this.stats.click * this.stats.clickMultiplier;
  }

  addBulidingIncomeToScore(): void {
    this.stats.score = this.stats.score + this.stats.additionToScore;
  }
  
  buyUpgrade(upgrade: Upgrade): void {
    if (this.stats.score >= upgrade.cost) {
      this.stats.score-= upgrade.cost;
      upgrade.count++;
      upgrade.increasePrice();
    }
  }
}
