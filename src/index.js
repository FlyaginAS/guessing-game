class GuessingGame {
  constructor() {
    // this.left = 0;
    // this.right = 0;
    this.mid = 0;
    // this.range = [];
    this.min = 0;
    this.max = 0;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.mid = Math.round(this.max - this.min) / 2;
    return this.mid;
  }

  lower() {
    this.max = this.mid;
    this.mid = Math.round(this.max - this.min) / 2;
  }

  greater() {}
}

module.exports = GuessingGame;
