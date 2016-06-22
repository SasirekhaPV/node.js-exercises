var http = require('http');
var request = require('request');
var PORT = 3000;

function getErrorPageHTML(city, err) {
  return `
  <h1>No weather info for ${city}</h1>
  <p>${err.message}</p>
  `;
}

function getHTML(data) {
  var html = `
  <html>
    <head>
      <meta charset="utf8">
      <title>${data.name}</title>
    </head>
    <body>
      <h1>${data.name}</h1>
      <p>
        Temperature: ${data.main.temp}°<br>
        Weather: ${data.weather[0].description}
      </p>
    </body>
  </html>
  `;
  return html;
}

var server = http.createServer(function(request, response) {
  var url = request.url;
  var city = url.substring(1);
  console.log('city', city);
  getWeather(city, function(err, data) {
    var html;
    if (err) {
      console.log('ERROR');
      html = getErrorPageHTML(city, err);
      response.write(html);
    } else {
      console.log('NO ERROR');
      html = getHTML(data);
      response.write(html);
    }
    response.end();
  });
});

server.listen(PORT, function() {
  console.log('server listening on PORT', PORT);
});

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
    if (data.cod === '404') {
      callback(new Error('No weather info'));
      return;
    }
    // call the callback, passing null for err to signal success
    callback(null, data);
  });
}
