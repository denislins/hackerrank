'use strict';

class CompareTheTriplets {

  static execute(a, b) {
    return [
      (a[0] > b[0]) + (a[1] > b[1]) + (a[2] > b[2]),
      (a[0] < b[0]) + (a[1] < b[1]) + (a[2] < b[2])
    ];
  }

  static executeCli(input) {
    const grades = input.map(i => {
      return i.split(' ').map(s => parseInt(s, 10));
    });

    console.log(this.execute(grades[0], grades[1]).join(' '));
  }

}

module.exports = CompareTheTriplets;
