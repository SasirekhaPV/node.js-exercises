var fs = require('fs');
var filename = 'overwritten.js';
var contents = process.argv[2];

fs.readFile('overwritten.js', function(err, buffer) {
  if (err) {
    console.log('Error', err);
    return;
  }
   var text = buffer.toString();

   fs.writeFile(filename, contents, function(err) {
     if (err) {
       console.log("Error ", err);
       return;
     }
     console.log("New Text: ", contents);

     console.log(contents);
   });
});
//
// console.log('this happened before the data was ready');
