'use strict';

const Challenge = require('../lib/challenge');

class LisasWorkbook extends Challenge {

  static execute(chapters, maxProblems, problemsPerChapter) {
    let [pages, specials] = [0, 0];

    for (const p of problemsPerChapter) {
      let problems = 0;

      while (problems !== p) {
        pages++;

        const firstProblem = problems + 1;
        problems += maxProblems;

        if (problems > p) {
          problems -= maxProblems - p % maxProblems;
        }

        if (firstProblem <= pages && pages <= problems) {
          specials++;
        }
      }
    }

    return specials;
  }

  static parseInput() {
    const [chapters, maxProblems] = this.input[0];
    return this.execute(chapters, maxProblems, this.input[1]);
  }

}

module.exports = LisasWorkbook;
