var express = require('express');
var app = express();
app.use(express.logger());


var fs = require('fs');


app.get('/', function(request, response) {
	var k = fs.readFileSync('./index.html','utf-8').toString("utf-8",0,null);
	response.send(k);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});