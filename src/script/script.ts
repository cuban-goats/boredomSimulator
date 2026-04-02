class Game {
  player: Player;
  constructor(name: string) {
    this.player= new Player(name);

  }
}

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

class Stats {
  score: number;
  click: number;
  clickMultiplier: number;
  additionToScore: number;

  constructor() {
    this.score = 0;
    this.click = 0;
    this.clickMultiplier = 1;
    this.additionToScore = 0;
  }
}

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

class clickingUpgrade extends Upgrade {
  clickingMulitplier: number;

  constructor(name: string, cost: number, clickingMultiplier: number) {
    super(name, cost);
    this.clickingMulitplier = clickingMultiplier;
  }
}

class building extends Upgrade {
  additionToScore: number;
  count: number;

  constructor(name: string, cost: number, additionToScore: number) {
    super(name, cost);
    this.additionToScore = additionToScore;
    this.count = 0;
  }

}

