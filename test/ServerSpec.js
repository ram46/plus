var expect = require('chai').expect;
var request = require('request');
var Sequelize = require('sequelize')

var config = require('../config.js')
var DATABASE = 'plus';
var DB_USER = 'mvp'

describe('Connection to DB', function(){
  var sequelize = new Sequelize(DATABASE, DB_USER, config.TOKEN, {
    host: 'localhost',
    dialect: 'mysql'
  })

  it('Connects to db successfully', function(){
    sequelize.authenticate().then(() => {
      var status = 'OK';
      expect(status).to.equal('OK')
    })
  })

})

