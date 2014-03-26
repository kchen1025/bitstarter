var express = require('express');
var app = express();
app.use(express.logger());


/*var fs = require('fs');
var dummy = fs.readFileSync(index.html,String);

var buffer = new Buffer(80);
buffer.write(dummy,"utf-8");
var output = buffer.toString("utf-8",0,80);*/


app.get('/', function(request, response) {
  response.send("hi there");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});