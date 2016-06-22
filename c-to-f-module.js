var request = require('request');

function convertCtoF(degreesC) {
  return degreesC * (9/5) + 32;

}

module.exports = convertCtoF;
