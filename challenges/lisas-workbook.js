'use strict';

class LisasWorkbook {

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

  static executeCli(input) {
    const parsedInput = this.parseInput(input);
    const [chapters, maxProblems] = parsedInput[0];
    console.log(this.execute(chapters, maxProblems, parsedInput[1]));
  }

  static parseInput(input) {
    return input.split("\n").map(function(line) {
      return line.trim().split(' ').map(s => parseInt(s, 10));
    });
  }

}

module.exports = LisasWorkbook;
