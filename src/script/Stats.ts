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

  getScore(): number {
    return this.score;
  }

  setScore(score: number): void {
    this.score = score;
  }

  printStats(): void {
    console.log("score: " + this.score);
    console.log("click: " + this.click);
    console.log("clickMultiplier: " + this.clickMultiplier);
    console.log("additionToScore: " + this.additionToScore);
  }
}
