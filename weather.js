var request = require('request');
var async = require('async');

var cities = [
  'Atlanta, GA',
  'Pheonix, AZ',
  'Dallas, TX',
  'Philadelphia, PA'
];

// var results = [];
async.map(cities, getWeather, function(err, results) {
  // console.log(results);
  var maxTemps = results.map(function(result) {
    // console.log(result.name);
    return result.name + ' ' + result.main.temp_max + '°';
  });
  var temps = results.map(function(result) {
    return result.main.temp;
  });
  console.log(maxTemps);
  console.log('average temperature: ', average(temps));
});

function average(results) {
  var sum = results.reduce(function(a, b) {
    return a + b;
  }, 0);
  return sum / results.length;
}

function getWeather(city, callback) {
  request({
    url: 'http://api.openweathermap.org/data/2.5/weather',
    qs: {
      q: city,
      units: 'imperial',
      APPID: '2316d4952cbc949469b1675923056c70'
    }
  }, function(err, response, body) {
    if (err) {
      // call the callback
      callback(err);
      return;
    }
    // convert the body in JSON format to a JS object
    var data = JSON.parse(body);
    // call the callback, passing null for err to signal success
    callback(null, data);
  });
}
