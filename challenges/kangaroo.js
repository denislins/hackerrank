'use strict';

class Kangaroo {

  static execute(k1, k2) {
    if (k1.velocity === k2.velocity) {
      return false;
    }

    const result = (k2.start - k1.start) / (k1.velocity - k2.velocity);
    return result > 0 && Math.floor(result) === result;
  }

  static executeCli(input) {
    input = input.split(' ').map(s => parseInt(s, 10));

    const k1 = { start: input[0], velocity: input[1] };
    const k2 = { start: input[2], velocity: input[3] };

    console.log(this.execute(k1, k2) ? 'YES' : 'NO');
  }

}

module.exports = Kangaroo;
