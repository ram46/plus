const request = require('request');
const config = require('../config.js');
// const jQuery = require('jquery');



let getVideo = function(videoID, cb) {

  // request.get({
  //   url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key='+config.TOKEN+'&v=AGBjI0x9VbM&maxResults=1'
  //   }, function(err, res){
  //   if (err) console.log(err)
  //   console.log(res.body)
  // })
  // Need to parse the id from the link


  // var videoID = link.match('v=.+')[0].split('=')[1]

  //AGBjI0x9VbM

  request.get({
    url: 'https://www.googleapis.com/youtube/v3/videos?key='+config.TOKEN+'&part=snippet,contentDetails,statistics,status&id='+videoID
    }, function(err, res, body){
      // console.log(body)
    if (err) console.log(err)
    cb(body);
  })


}


module.exports.getVideo = getVideo


