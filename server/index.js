const express = require('express');

const util = require('../helpers/youTube.js')
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


app.post('/video', function (req, res) {
  var data = '';
  req.on('data', function(chunk){
    data += chunk
    // HANDLE persistence!!
    // data = JSON.parse(data);
    // save in database
  })

  res.writeHead(200, defaultCorsHeaders);
  res.end('post done!')
});

// app.get('/video/:id', function(req, res){
//   console.log('here in the get vidoe ID')
//    util.getVideo(req['params']['id'], function(result){
//       console.log('here is the youtube result');
//       res.writeHead(200, defaultCorsHeaders);
//       res.end(result)
//     })

// })

// Good learning -- note that above ES5 func does not work bc of context issue.
app.get('/video/:id', (req, res) => {
  console.log(req.path, req['params']['id'])
  util.getVideo(req['params']['id'], function(result) {
    res.writeHead(200, defaultCorsHeaders)
    res.end(result);
  })
})

app.get('/history', function (req, res) {
  // will get the data from database - for recently played songs
  res.writeHead(200, defaultCorsHeaders);
  res.end('need to work on it')
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

