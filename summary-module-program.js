var fileSummary =  require('./summary-module.js');
var file = process.argv[2];
// console.log(file);
fileSummary(file, function(err, summary) {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log('Line count:', summary.lineCount);
  console.log('Character count:', summary.charCount);
});
