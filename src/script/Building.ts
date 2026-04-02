class Building extends Upgrade {
  additionToScore: number;
  count: number;

  constructor(name: string, cost: number, additionToScore: number) {
    super(name, cost);
    this.additionToScore = additionToScore;
    this.count = 0;
  }

}

