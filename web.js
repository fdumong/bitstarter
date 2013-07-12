/*var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
 
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});  
*/

  var fs = require("fs");
  var hn = require("hn");

  var data = {
  CONTENT: "hello felix"
};

var temp = fs.readFileSync('./index.html','utf8');
var templ = hn.compile(temp);
var html = temple(data);
