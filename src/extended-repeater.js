const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  separator = typeof options.separator !== "undefined" ? options.separator : "+";
  additionSeparator = typeof options.additionSeparator !== "undefined" ? options.additionSeparator : "|";
  repeatTimes = typeof options.repeatTimes !== "undefined" ? options.repeatTimes : 1;
  additionRepeatTimes = typeof options.additionRepeatTimes !== "undefined" ? options.additionRepeatTimes : 1;
  addition = typeof options.addition !== "undefined" ? String(options.addition) : "";
  str = String(str);

  let finalyArr = [];
  let additionArr = [];

  for (repeatTimes; repeatTimes > 0; repeatTimes--) {
    finalyArr.push(str);
  }

  for (additionRepeatTimes; additionRepeatTimes > 0; additionRepeatTimes--) {
    additionArr.push(addition);
  }
  
  additionArr = additionArr.join(additionSeparator);
  let mostFinalyArr = finalyArr.map((item) => {
    return (item += additionArr);
  });
  return mostFinalyArr.join(separator);
};
