import React from 'react';
import ReactDOM from 'react-dom';


function DataList(props) {
  var statsData = props.statsData;
  var statItems = statsData.map((stat, index) =>
    <li key={index}> {stat.mathFunc} {stat.count} </li>
    );
  return (
    <ul> {statItems} </ul>)
}


class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.handleStats = this.handleStats.bind(this);
    this.prevState = {factorial:0, power:0, log:0, basic:0, sqrt:0}

    this.state = {
      topFunc: [],
    }
  }

  handleStats() {
    this.props.stats((result) => {

      var self = this;

      for (var i = 0; i < result.length; i++) {
        if (result[i].mathFunc === 'factorial') { var resFactorial = result[i].count; }
        if (result[i].mathFunc === 'sqrt') { var resSqrt = result[i].count; }
        if (result[i].mathFunc === 'power') { var resPower = result[i].count; }
        if (result[i].mathFunc === 'log') { var resLog = result[i].count; }
        if (result[i].mathFunc === 'basic') { var resBasic = result[i].count; }

      }

      if (resFactorial !== self.prevState.factorial || resPower !== self.prevState.power || resLog !== self.prevState.log || resSqrt !== self.prevState.sqrt || resBasic !== self.prevState.basic) {

        // if (JSON.stringify(result) !== JSON.stringify(this.state.topFunc)) {
        // debugger
        self.setState({topFunc: result})

        self.prevState.factorial = resFactorial;
        self.prevState.log = resLog;
        self.prevState.power = resPower;
        self.prevState.basic = resBasic;
        self.prevState.sqrt = resSqrt;

        // debugger
      }
    })
  }

  // componentDidUpdate(prevProps, prevState) {

    // this.props.stats((result) => {
    //   if (JSON.stringify(result) !== JSON.stringify(this.state.topFunc)) {
    //     this.setState({topFunc: result})
    //   }

    // })
  // }

  render() {
    // debugger
    return (<div>
      <h3> Stats </h3>
      {this.handleStats()}
      <DataList statsData={this.state.topFunc}/>
      </div>)
  }
}


export default Stats






