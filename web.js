var express = require('express');
var fs  = require('fs');
var app = express.createServer(express.logger());
var filecontent;
var content="";

try{
 filecontent = fs.readFileSync('index.html','utf8');
}
catch(err){
 console.log(err)
} 

if(filecount){
content+=filecontent;

app.get('/',function(request,response){
   response.send('Hello Nasa');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});  
}
