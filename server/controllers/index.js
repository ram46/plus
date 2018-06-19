const express = require('express');
var db = require('../models');

// var defaultCorsHeaders = {
//   'access-control-allow-origin': '*',
//   'access-control-allow-methods': 'GET, POST, OPTIONS',
//   'access-control-allow-headers': 'content-type, accept',
//   'access-control-max-age': 10 // Seconds.
// };


module.exports = {

  activities: {
    get: function(req, res) {
      db.Activity.findAll({}).then(function(data){res.json(data)})
    },

    post: function(req, res) {
      db.Activity.findOne({where: {mathFunc: req.body.mathFunc, query:req.body.query}}).then(function(data){
          if (data === null) {
            res.end(null)
          } else {
            res.end(data.result)
          }
          // res.json(data)
      })

    }

  },

  save: {
    post: function(req, res) {
      db.Activity.create({
          mathFunc: req.body.mathFunc,
          query: req.body.query,
          result: req.body.result
        })
    }
  },

  stats: {
    get: function(req, res) {
      db.connection.query("SELECT mathFunc, COUNT(mathFunc) as count from `activity` GROUP BY mathFunc", { model: db.Activity })
      .then(function(data) {
        res.json(data)
      })
  }
}

  // create: {
  //   post: function(req, res) {
  //     console.log('the req body is:', req.body)
  //     db.Activity.findAll({}).then(function(data){res.json(data)})
  //   }

  // }

  // activities: {
  //   get: function(req, res) {
  //     db.Activity.findAll({include: [db.User]})
  //     .then(function(activities){
  //       res.json(activities);
  //     })
  //   },

  //   post: function(req, res) {
  //     db.User.findOrCreate({where: {username:req.body.username}})
  //     .spread(function(user, created){
  //       db.Activity.create({
  //         function: user.get('function')
  //       }).then(function(message){
  //         res.sendStatus(200)
  //       })
  //     })
  //   }
  // },


  // users: {
  //   get: function(req, res) {
  //     db.User.findAll()
  //     .then(function(users){
  //       res.json(users)
  //     })
  //   },


  //   post: function(req, res) {
  //     db.User.findOrCreate({where: {username: req.body.username}})
  //     .spread(function(user, created){
  //       res.sendStatus(200)
  //     })

  //   }
  // }


}


