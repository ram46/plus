import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

// import '../styles/styles.css'
import Basic from './components/Basic.jsx';
import Factorial from './components/Factorial.jsx';
import Power from './components/Power.jsx';
import Log from './components/Log.jsx';
import SquareRoot from './components/SquareRoot.jsx';

import util from '../../helpers/math.js'
import parser from '../../helpers/parser.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.calcBasic = this.calcBasic.bind(this);
    this.calcFactorial = this.calcFactorial.bind(this);
    this.calcPower = this.calcPower.bind(this);
    this.calcLog = this.calcLog.bind(this);
    this.calcSquareRoot = this.calcSquareRoot.bind(this);

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
    var parsed = parser.basic(input);
    var opA = parsed[0];
    var operator = parsed[1];
    var opB = parsed[2];
    var result = util.basic([opA, operator, opB]);
    cb(result);
  }

  calcFactorial(input, cb) {
    console.log('in factorial', input);
    var parsed = parser.factorial(input);
    var result = util.factorial(parsed);
    cb(result);
  }

  calcPower(input, cb) {
    var n = parser.power(input)[0];
    var exp = parser.power(input)[1];
    var result = util.power(n,exp);
    cb(result);
  }

  calcLog(input, cb) {
    var parsed = parser.log(input);
    var n = parsed[0];
    var base = parsed[1];
    var result = util.log(n, base);
    cb(result);
  }

  calcSquareRoot(input, cb) {
    var parsed = parser.squareRoot(input);
    var result = util.squareRoot(parsed);
    cb(result);
  }

  render () {
    return (<div>
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
