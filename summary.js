var fs = require('fs');
var charCount = 0;
var file = process.argv[2]; // used mult-line.txt file

fs.readFile(file, function(err, buffer){
  if (err) {
    console.log('Error', err);
    return;
  }
  buffer = buffer.toString();
  bufferCount = buffer.toString().length;
  var lines = buffer.split('\n');
  var numLines = lines.length;
  // for (var i = 2; i < buffer.length; i++) {
  //   charCount += buffer[i];
  // }
  console.log('number of lines ', numLines);
  console.log('number of characters: ', bufferCount);
});
