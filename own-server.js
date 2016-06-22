var http = require('http');

var PORT = 8080;
// var urlTyped = require('url').parse(request.url);

function requestHandler(request, response) {
  var urlTyped = require('url').parse(request.url, true);
  var name = urlTyped.query.name;
  response.end('Hello, ' + name);
  console.log(urlTyped);
}

var server = http.createServer(requestHandler);

server.listen(PORT, function() {
  console.log('server listening on PORT', PORT);
});
