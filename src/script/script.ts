const GameBuilder = (playerName: string) => {
  const Game = {
    player: PlayerBuilder(playerName),
    clickingUpgrade: ClickingUpgradeBuilder(),
    buildingUpgrade: BuildingBuilder(),
  };
}

const PlayerBuilder = (playerName: string) => {
  const Player = {
    name: playerName,
    score: 0,
    click: 1,
    clickingMulitplier: 1,
    buildingMultiplier: 1,
  };

  function click() {
    Player.score = Player.score + (Player.click * Player.clickingMulitplier);
  };

  function addToScore(i: number) {
    Player.score = Player.score + i;
  };
}

const ClickingUpgradeBuilder = () => {
  const ClickingUpgrade = {
    name: '',
    price: 0,
    counter: 0,
    multiplier: 1,
  };
}

const BuildingBuilder = () => {
  const Building = {
    name: '',
    price: 0,
    counter: 0,
    addedScorePerSec: 0,
  };
}

