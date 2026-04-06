import { Player } from "./Player.ts"

export class Game {
  player: Player;
  constructor(name: string) {
    this.player= new Player(name);
  }
}

