import { Building, ClickingUpgrade } from "./Upgrade";
import { Upgrade } from "./Upgrade";

export class Stats {
  private score: number;
  private click: number;
  private clickMultiplier: number;
  private additionToScore: number;

  powerBoredom: ClickingUpgrade;
  superBoredom: ClickingUpgrade;

  autoBoredom: Building;
  boredomFarm: Building;
  boredomFactory: Building;

  constructor() {
    this.score = 0;
    this.click = 1;
    this.clickMultiplier = 1;
    this.additionToScore = 0;

    this.powerBoredom = new ClickingUpgrade("powerBoredom", 100, 2);
    this.superBoredom = new ClickingUpgrade("superBoredom", 1000, 4);

    this.autoBoredom = new Building("autoBoredom", 10, 1);
    this.boredomFarm = new Building("boredomFarm", 20, 5);
    this.boredomFactory = new Building("boredomFactory", 50, 10);
  }


  getScore(): number {
    return this.score;
  }

  setScore(score: number): void {
    this.score = score;
  }

  getClick() {
    return this.click;
  }

  setClick(click: number) {
    this.click = click;
  }

  getClickMultiplier() {
    return this.clickMultiplier;
  }

  setClickMultiplier(clickMultiplier: number) {
    this.clickMultiplier = clickMultiplier;
  }

  getAdditionToScore() {
    return this.additionToScore;
  }

  setAdditionToScore(additionToScore: number) {
    this.additionToScore = additionToScore;
  }

  printStats(): void {
    console.log("score: " + this.getScore);
    console.log("click: " + this.getClick);
    console.log("clickMultiplier: " + this.getClickMultiplier);
    console.log("additionToScore: " + this.additionToScore);
  }
}
