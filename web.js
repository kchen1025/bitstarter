var express = require('express');
var app = express();
app.use(express.logger());


var fs = require('fs');
var buffer = new Buffer(80);

buffer = fs.readFileSync(index.html,null);

//buffer.write(dummy,"utf-8");
var output = buffer.toString("utf-8",0,80);


app.get('/', function(request, response) {
  response.send(output);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});