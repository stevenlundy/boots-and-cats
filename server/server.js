var express = require('express');

var port = 3000;

var app = express();

app.use(express.static(__dirname + '/../client'));

var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('listening at http://%s:%s', host, port);
});