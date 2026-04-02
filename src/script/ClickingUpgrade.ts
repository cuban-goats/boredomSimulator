class ClickingUpgrade extends Upgrade {
  clickingMulitplier: number;

  constructor(name: string, cost: number, clickingMultiplier: number) {
    super(name, cost);
    this.clickingMulitplier = clickingMultiplier;
  }
}
