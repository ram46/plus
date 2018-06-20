// import $ from 'jquery';


var dbFind = function($, mathFunc, query, cb) {

  // $.post('http://localhost:1128/activity', {mathFunc: mathFunc, query: query }).done(function(result) {
  //     console.log('in db find', result)
  // }, "json")

  $.ajax({
    url: 'http://localhost:1128/activity',
    method: 'POST',
    data: {mathFunc: mathFunc, query: query },
    type: 'json',
  }).done(function(result){
    cb(result)
  }).fail(function(err){
    console.log(err)
  })

}

var dbSave = function($, mathFunc, query, result) {
  $.ajax({
    url: 'http://localhost:1128/save',
    method: 'POST',
    data: {mathFunc: mathFunc, query: query, result: result },
    type: 'json',
  }).done(function(result){
  }).fail(function(err){
    console.log(err);
  })
}

var dbStats = function($, cb) {
  //setInterval(function(){
    $.ajax({
      url: 'http://localhost:1128/stats'
    }).done(function(result){
      // console.log(result)
      cb(result)
    }).fail(function(err){
      console.log(err)
    })

  //}, 3000)
}


module.exports = {
    dbFind: dbFind,
    dbSave: dbSave,
    dbStats: dbStats
}