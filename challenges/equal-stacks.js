'use strict';

class EqualStacks {

  static execute(stacks) {
    let heights = this.calculateHeights(stacks);
    let highestStack;

    // while the stacks are different
    while (new Set(heights).size !== 1) {
      highestStack = heights.indexOf(Math.max(...heights));
      heights[highestStack] -= stacks[highestStack].shift();
    }

    return heights[0];
  }

  static calculateHeights(stacks) {
    return stacks.map(stack => {
      return stack.reduce((a, b) => a + b, 0);
    });
  }

  static executeCli(input) {
    // discard metadata
    input.shift();

    const stacks = input.map(line => {
      return line.split(' ').map(Number);
    });

    console.log(this.execute(stacks));
  }

}

EqualStacks.executeCli(['5 3 4', '3 2 1 1 1', '4 3 2', '1 1 4 1']);

module.exports = EqualStacks;
