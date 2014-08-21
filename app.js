var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res){
  res.send("process.version: " + process.version);
});

var server = app.listen(app.get('port'), function() {
    console.log('Listening on port %d', server.address().port);
});
