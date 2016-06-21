var fs = require('fs');

fs.readFile('hi.txt', function(err, buffer) {
  if (err) {
    console.log('Error', err);
    return;
  }
  console.log('From hi.txt ', buffer.toString());
});

console.log('this happened before the data was ready');
