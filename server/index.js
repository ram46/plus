var express = require('express');
var router = require('./routes.js')

var bodyParser = require('body-parser')

var app = express();

app.use(express.static(__dirname + '/../client/dist'));

var port = 1128;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(router);

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});