// console.log('Hello, World');

var fs = require('fs');

var buffer = fs.readFileSync('hi.txt');

console.log('Buffer: ' + buffer);
