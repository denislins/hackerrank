'use strict';

class Challenge {

  static executeCli() {
    this.input = [];
    return this.readInput.bind(this);
  }

  static readInput(input, options = {}) {
    if (options.skipArray !== false) {
      input = input.trim().split(' ');
    }

    if (options.skipMap !== false) {
      input = input.map(s => parseInt(s, 10));
    }

    this.input.push(input);

    if (this.input.length > 1) {
      console.log(this.parseInput());
    }
  }

}

module.exports = Challenge;
