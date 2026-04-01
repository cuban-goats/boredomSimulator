// game
let counter = 0;
const textBox = document.getElementById('textBox');
textBox.addEventListener('click', function() {
  document.getElementById("counterText").innerHTML = counter; // change to Player score
});

const box = document.getElementById('box');
box.addEventListener('click', function() {
  increment(1);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    increment(1); // change to Player click()
  }
});

class Game {
  constructor() {
    this.player = new Player();
    this.powerClick = new ClickUpgrade("autoClick", 100, 2);
    this.autoClick = new Building("autoClick", 10, 1)
    this.autoBoredom = new Building("autoBoredom", 50, 5)
  }
}

class Player {
  constructor() {
    this.score = 0;
    this.clickingMultiplier = 1;
    this.buildingMultiplier = 1;
  }

  getScore() {
    return this.score;
  }

  click() {
    this.score = this.score + 1 * this.clickingMultiplier;
    document.getElementById("counterText").innerHTML = this.score;
  }
}

class ClickUpgrade {
  constructor(name, price, multiplier) {
    this.name = name;
    this.price = price;
    this.multiplier = multiplier;
    this.counter = 0;
  }

  buy(p) {
    if ((p.score - this.price) >= 0) {
      p.score -= this.price;
      this.counter++;
      upgradeClick(p);
    }
  }

  upgradeClick(p) {
    p.clickingMultiplier *= this.multiplier;
  };
}

class Building {
  constructor(name, price, scoreAddition) {
    this.name = name;
    this.price = price;
    this.scoreAddition = scoreAddition;
    this.counter = 0;
  }

  addToScore(p) {
    p.score = p.score + this.scoreAddition * p.buildingMultiplier;
  }
}


const game = new Game();
