const express = require('express');

// const util = require('../helpers/youTube.js')
const db = require('../database/index.js')


let app = express();

app.use(express.static(__dirname + '/../client/dist'));


var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10 // Seconds.
};


app.options('/*', function(req, res){
  res.writeHead(200, defaultCorsHeaders)
  res.end()
})


let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});