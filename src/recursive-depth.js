const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, count = 1, result = []) {
    result.push(count);
    count++;

    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        this.calculateDepth(arr[i], count, result);
      }
    }
    return Math.max(...result);
  }
};
