var request = require('request');
var city = process.argv[2];
getWeather(city, function(err, data) {
  if (err) {
    console.log("Get weather failed: ", err.message);
  }
  console.log("Description: ", data.weather[0].description);
  console.log("Temp: ", data.main.temp + '°');
});
// request(city, function(err, response, body) {
//   console.log(body);
// });



function getWeather(city, callback){
  request({
    url: "http://api.openweathermap.org/data/2.5/weather",
    qs: {
      q: city,
      units: 'imperial',
      APPID: '2316d4952cbc949469b1675923056c70'
    }
  }, function(err, response, body) {
    if (err) {
      callback(err);
      return;
    }
    var data = JSON.parse(body);
    if (data.cod === "404") {
      var error = new Error(data.message);
      callback(error);
      return;
    }
    callback(null, data);
  });
}
