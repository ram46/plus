var Sequelize = require('sequelize')
var config = require('../config.js')

var connection = new Sequelize('plus', 'mvp', config.TOKEN, {
  host: 'localhost',
  dialect: 'mysql'
})


connection.authenticate().then(() => { console.log('successful connection to db') }).catch(err => { console.error('failed connection to db', err) })


module.exports = connection;