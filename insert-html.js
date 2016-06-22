var http = require('http');

var PORT = 7000;
// var urlTyped = require('url').parse(request.url);

var title = "Hello World";
var text = "this some placeholder text";
var html = `
<html>
  <head>
    <title>${title}</title>
    <link href="styles.css" rel="stylesheet">
    <script src="script.js"></script>
  </head>
  <body>
    <h1>${title}</h1>
    <p>${text}</p>
  </body>

</html>

`;

var css = `
body {
  background-color: teal;
}
`;

var javascript = `
  alert('Hello world!');
`;


var server = http.createServer(function(request, response) {
  var url = request.url;
  if (url === '/') {
    response.write(html);
  } else if (url === '/script.js') {
    response.write(javascript);
  } else if (url === '/styles.css') {
    response.write(css);
  }
  response.end();
});

server.listen(PORT, function() {
  console.log('server listening on PORT', PORT);
});
