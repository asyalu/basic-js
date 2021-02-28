const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)){
    throw new Error()
  }
  let finalArr = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--discard-next":
        i++;
        break;
      case "--discard-prev":
        if (i !== 0 && arr[i - 2] !== "--discard-next") {
          finalArr.pop();
        }
        break;
      case "--double-next":
        if (i + 1 < arr.length) {
          finalArr.push(arr[i + 1]);
        }
        break;
      case "--double-prev":
        if (i !== 0 && arr[i - 2] !== "--discard-next") {
          finalArr.push(arr[i - 1]);
        }
        break;
      default:
        finalArr.push(arr[i]);
    }
  }
  return finalArr;
};
