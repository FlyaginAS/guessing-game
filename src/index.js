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
    this.mid = Math.round((this.min + this.max) / 2);
  }

  guess() {
    // ошибка округления...
    // 279,280
    // 278, 279
    // this.mid = Math.round((this.min + this.max) / 2);
    // (278+279)/2= 278.5 round=> 279
    // (279+280)/2=279.5 round=>280
    // this.mid = Math.round((this.max - this.min) / 2) + this.min;
    // (279-278)/2=0.5 round=>1, 1+278=279
    // (280-279)/2=0.5 round=>1, 1+279=280
    // console.log(this.mid);

    // ерунда какя-то, попробую костыль
    // this.mid = this.min + Math.floor((this.max - this.min) / 2);
    // if ((this.min + this.max) % 2 !== 0) {
    //   this.mid += 1;
    // }

    this.mid = Math.round((this.max + this.min) / 2);
    return this.mid;
  }
  // ошибка была в  this.min\max = this.mid+1,

  lower() {
    this.max = this.mid;
  }

  greater() {
    this.min = this.mid;
  }
}

module.exports = GuessingGame;

// const number = 409;
// const game = new GuessingGame();
// game.setRange(0, 4048);

// let result = game.guess();
// game.lower();
// result = game.guess();
// game.lower();
// result = game.guess();
// game.lower();
// result = game.guess();
// game.greater();
// result = game.guess();
// game.greater();
// result = game.guess();
// game.lower();
// result = game.guess();
// game.lower();
// result = game.guess();
// game.greater();
// result = game.guess();
// game.greater();
// result = game.guess();
// game.greater();
// result = game.guess();
// game.lower();
// result = game.guess();
// console.log('*********');
// console.log(result);

//! *****************************
// const number = 279;
// const game = new GuessingGame();
// game.setRange(0, 3445);

// let result = game.guess();
// game.lower();
// result = game.guess();
// game.lower();
// result = game.guess();
// game.lower();
// result = game.guess();
// game.greater();
// result = game.guess();
// game.lower();
// result = game.guess();
// game.greater();
// result = game.guess();
// game.lower();
// result = game.guess();
// game.lower();
// result = game.guess();
// game.greater();
// result = game.guess();
// game.lower();
// result = game.guess();
// console.log(result);
