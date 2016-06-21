var request = require('request');
var fs = require('fs');
var website = process.argv[2];
var newWebsite = process.argv[3];
request(website, function(err, response, body) {
  // console.log('this is the body: ', body);
  fs.writeFile(newWebsite, body, function(err) {
    if (err) {
      console.log(err.message);
    }
    console.log('success');
  });
});
