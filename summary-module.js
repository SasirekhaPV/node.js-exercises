  var summary = function(err) {
  var fs = require('fs');
  var file = process.argv[2]; // used mult-line.txt file
  // console.log(file);
  fs.readFile(file, function(err, buffer){
    if (err) {
      console.log('Error', err);
      return;
    }
    buffer = buffer.toString();
    var charCount = buffer.toString().length;
    var lines = buffer.split('\n');
    var lineCount = lines.length;

    console.log('number of lines ', lineCount);
    console.log('number of characters: ', charCount);
  });
};

module.exports = summary;
