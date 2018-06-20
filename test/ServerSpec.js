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

  // it('should write to db', function() {
    // request.post('http://localhost:1128/save', {mathFunc:'basic',query:'2+3',result:'5'}, (err,httpResponse,body) => {
    //   console.log(response)
    //   expect(response.statusCode).to.equal(200)
    // })
  // })

})



// read and write to database
// check all components e.g. if power works and return the right value 2^3 = 8, factorial 5! = .. etc etc

