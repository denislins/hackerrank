'use strict';

class GridSearch {

  static execute(matrix, submatrix) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (this.findSubmatrix(matrix, submatrix, i, j)) {
          return true;
        }
      }
    }

    return false;
  }

  static findSubmatrix(matrix, submatrix, x, y) {
    for (let i = 0; i < submatrix.length; i++) {
      for (let j = 0; j < submatrix[i].length; j++) {
        if (submatrix[i][j] !== matrix[x + i][y + j]) {
          return false;
        }
      }
    }

    return true;
  }

  static executeCli(input) {
    const problems = this.parseInput(input);

    problems.forEach(function(p) {
      console.log(this.execute(p.matrix, p.submatrix) ? 'YES' : 'NO');
    }, this);
  }

  static parseInput(input) {
    const problems = [];
    input.shift();

    while (input.length !== 0) {
      problems.push(this.parseProblem(input));
    }

    return problems;
  }

  static parseProblem(input) {
    return {
      matrix: this.parseMatrix(input),
      submatrix: this.parseMatrix(input),
    };
  }

  static parseMatrix(input) {
    const rows = parseInt(input.shift().split(' ')[0], 10);
    let matrix = [];

    for (let i = 0; i < rows; i++) {
      const row = input.shift().split('').map(s => parseInt(s, 10));
      matrix.push(row);
    }

    return matrix;
  }

}

module.exports = GridSearch;
