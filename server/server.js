var express = require('express');
var bodyParser = require('body-parser');
var beatParser = require('./beatParser');

var port = 3000;

var app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client'));

app.post('/api/parse-beat/', function (req, res) {
  var beatSyllables = beatParser.parse(req.body.steps);
  res.send({syllables: beatSyllables});
});

var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('listening at http://%s:%s', host, port);
});