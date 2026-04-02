class Player {
  name: string;
  private stats: Stats;

  constructor(name: string) {
    this.name = name;
    this.stats = new Stats();
  }

  addClickToScore(): void {
    this.stats.setScore(this.stats.score + this.stats.click * this.stats.clickMultiplier);
  }

  addBulidingIncomeToScore(): void {
    this.stats.setScore(this.stats.score + this.stats.additionToScore);
  }
  
  buyUpgrade(upgrade: Upgrade): void {
    if (this.stats.getScore() >= upgrade.cost) {
      this.stats.setScore(this.stats.score - upgrade.cost);
      upgrade.count++;
      upgrade.increasePrice();
    }
  }
}
