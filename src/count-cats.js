const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
    let count = 0;
    for (one of arr) {
      one.forEach(element => {
        if (element == '^^') {
          count++
        } 
      });
    } return count
};