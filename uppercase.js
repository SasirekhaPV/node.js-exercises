var fs = require('fs');
var file = process.argv[2];

fs.readFile(file, function(err, buffer) {
  if (err) {
    console.log('Error', err);
    return;
  }
  console.log('From hi.txt ', buffer.toString().toUpperCase());
});

console.log('this happened before the data was ready');
