'use strict';

class DivisibleSumPairs {

  static execute(numbers, divisor) {
    let pairs = 0;
    const length = numbers.length;

    for (let i = 0; i < length; i++) {
      for (let j = i + 1; j < length; j++) {
        if ((numbers[i] + numbers[j]) % divisor === 0) {
          ++pairs;
        }
      }
    }

    return pairs;
  }

  static executeCli(input) {
    const divisor = parseInt(input[0].split(' ')[1], 10);
    const numbers = input[1].split(' ').map(Number);
    console.log(this.execute(numbers, divisor));
  }

}

module.exports = DivisibleSumPairs;
