var express = require('express');
var router = require('./routes.js')

var app = express();

app.use(express.static(__dirname + '/../client/dist'));

var port = 1128;

app.use(router);

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});