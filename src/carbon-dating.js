const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity === 'string') {
    let numSampleActivity = parseFloat(sampleActivity);
    if (numSampleActivity > 0 && numSampleActivity < 15) {
      if (typeof numSampleActivity === 'number' && isFinite(numSampleActivity)) {
        return Math.ceil(Math.log(MODERN_ACTIVITY/numSampleActivity)/(0.693/HALF_LIFE_PERIOD));
      } else {
        return false
      }
    } return false
} return false
};
