const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let seasons = ["winter","spring", "summer", "autumn"];
  let check = (Object.prototype.toString.call(date) === '[object Date]');
  let res = date.getMonth();
  
  console.log(date,res, check);
  if (!check) return 'Unable to determine the time of year!';
  else if (!res) throw new Error('Invalid date!');
  else if (res<2 || res === 11) return seasons[0];
  else if (res>=2 && res<=4) return seasons[1];
  else if (res>=5 && res<=7) return seasons[2];
  else if (res>=8 && res<=11) return seasons[3];
  
  
}

module.exports = {
  getSeason
};
