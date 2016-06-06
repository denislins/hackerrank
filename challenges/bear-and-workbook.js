'use strict';

var Challenge = require('../lib/challenge');

class LisasWorkbook extends Challenge {

  static execute(chapters, maxProblems, problemsPerChapter) {
    return arguments;
  }

  static parseInput() {
    const [chapters, maxProblems] = this.input[0];
    return this.execute(chapters, maxProblems, this.input[1]);
  }

}

var callback = LisasWorkbook.executeCli();

callback('5 3 ');
callback(' 4 2 6 1 10');

module.exports = LisasWorkbook;
