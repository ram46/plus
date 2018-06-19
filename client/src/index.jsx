import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

// import '../styles/styles.css'
import Basic from './components/Basic.jsx';
import Factorial from './components/Factorial.jsx';
import Power from './components/Power.jsx';
import Log from './components/Log.jsx';
import SquareRoot from './components/SquareRoot.jsx';
import Stats from './components/Stats.jsx';
import User from './components/User.jsx';


import util from '../../helpers/math.js'
import parser from '../../helpers/parser.js'
import db from '../../helpers/db.js'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.calcBasic = this.calcBasic.bind(this);
    this.calcFactorial = this.calcFactorial.bind(this);
    this.calcPower = this.calcPower.bind(this);
    this.calcLog = this.calcLog.bind(this);
    this.calcSquareRoot = this.calcSquareRoot.bind(this);
    this.stats = this.stats.bind(this);
    this.userData = this.userData.bind(this);

    this.divStyle = {
      margin: '40px',
      border: '4px solid pink'
    };
    this.pStyle = {
      fontSize: '15px',
      textAlign: 'center'
    };
  }

  calcBasic(input, cb) {

    db.dbFind($, 'basic', input, function(result){
      if (result) {
        cb(result)
      } else {
        var parsed = parser.basic(input);
        var opA = parsed[0];
        var operator = parsed[1];
        var opB = parsed[2];
        var result = util.basic([opA, operator, opB]);
        db.dbSave($, 'basic', input, result);
        cb(result);
      }
    })
  }

  calcFactorial(input, cb) {
    db.dbFind($, 'factorial', input, function(result){
      if (result) {
        cb(result)
      } else {
        var parsed = parser.factorial(input);
        var result = util.factorial(parsed);
        db.dbSave($, 'factorial', input, result);
        cb(result);
      }
    })
  }

  calcPower(input, cb) {
    db.dbFind($, 'power', input, function(result){
      if (result) {
        cb(result)
      } else {
        var n = parser.power(input)[0];
        var exp = parser.power(input)[1];
        var result = util.power(n,exp);
        db.dbSave($, 'power', input, result);
        cb(result);
      }
    })
  }

  calcLog(input, cb) {
    db.dbFind($, 'log', input, function(result){
      if (result) {
        cb(result)
      } else {
        var parsed = parser.log(input);
        var n = parsed[0];
        var base = parsed[1];
        var result = util.log(n, base);
        db.dbSave($, 'log', input, result);
        cb(result);
      }
    })
  }

  calcSquareRoot(input, cb) {
    db.dbFind($, 'sqrt', input, function(result){
      if (result) {
        cb(result)
      } else {
        var parsed = parser.squareRoot(input);
        var result = util.squareRoot(parsed);
        db.dbSave($, 'sqrt', input, result);
        cb(result);
      }
    })
  }

  stats(cb) {
    db.dbStats($, function(result){
      cb(result)
    })
  }

  userData(username, cb) {
    cb(['user data','user data']);
  }

  render () {
    return (<div>
       <div>
        <Stats stats={this.stats} />
      </div>
      <div>
        <User userData={this.userData}/>
      </div>
      <div style={this.divStyle}>
        <Basic calcBasic={this.calcBasic}/>
      </div>
       <div style={this.divStyle}>
        <Factorial calcFactorial={this.calcFactorial}/>
      </div>
      <div style={this.divStyle}>
        <Power calcPower={this.calcPower}/>
      </div>
      <div style={this.divStyle}>
        <Log calcLog={this.calcLog}/>
      </div>
      <div style={this.divStyle}>
        <SquareRoot calcSquareRoot={this.calcSquareRoot} />
      </div>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
