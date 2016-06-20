'use strict';

class Challenge {

  static executeCli(input, options = {}) {
    this.input = input.split("\n").map(function(line) {
      if (options.skipArray !== false) {
        line = line.trim().split(' ');
      }

      if (options.skipMap !== false) {
        line = line.map(s => parseInt(s, 10));
      }

      return line;
    });

    console.log(this.parseInput());
  }

}

module.exports = Challenge;
