const CustomError = require("../extensions/custom-error");

const chainMaker = {
  finalyChain: [],
  getLength() {
    return this.finalyChain.length;
  },
  addLink(value) {
    this.finalyChain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      !Number.isInteger(position) ||
      position < 1 ||
      position > this.finalyChain.length
    ) {
      this.finalyChain = [];
      throw new Error();
    } else {
      this.finalyChain.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.finalyChain.reverse();
    return this;
  },
  finishChain() {
    let returnChain = this.finalyChain.slice(0, this.finalyChain.length);
    this.finalyChain = [];
    return returnChain.join("~~");
  },
};

module.exports = chainMaker;
