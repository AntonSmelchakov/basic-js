const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let isValid = true;
  if (typeof sampleActivity !== 'string') isValid = false;
  else if (+sampleActivity === NaN) isValid = false;
  else if (+sampleActivity >= 15) isValid =false;
  else if (+sampleActivity <= 0) isValid =false;

  if (isValid) {
    let num = +sampleActivity;
    let t = Math.log(MODERN_ACTIVITY/num) / (Math.log(2)/HALF_LIFE_PERIOD);
    let res = Math.ceil(t);
    return (res) ? res : false ;
  }
  return false;
}

module.exports = {
  dateSample
};
