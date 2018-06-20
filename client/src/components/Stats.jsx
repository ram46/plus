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
    // this.state = {
    //   factorial: 0,
    //   power: 0,
    //   log: 0,
    //   sqrt: 0,
    //   basic: 0
    // }

    this.state = {
      topFunc: [],
      //rerender: this.props.updateStats
    }
  }

  handleStats() {
    this.props.stats((result) => {
      // var resFactorial;
      // var resPower;
      // var resLog;
      // var resSqrt;
      // var resBasic;

      var self = this;
      var resBasic = result[0].count
      var resFactorial = result[1].count
      var resLog = result[2].count
      var resPower = result[3].count
      var resSqrt = result[4].count

      // debugger
      ////////
      // for (var i = 0; i < result.length; i++) {
      //   // debugger
      //   var resFactorial =  result[i].mathFunc ==='factorial' ? result[i].count: 0;
      //   var resPower =  result[i].mathFunc === 'power' ? result[i].count: 0;
      //   var resSqrt =  result[i].mathFunc === 'sqrt' ? result[i].count : 0;
      //   var resBasic = result[i].mathFunc === 'basic' ? result[i].count : 0;
      //   var resLog =  result[i].mathFunc === 'log' ? result[i].count: 0;
      // }
      ////////
      if (resFactorial !== self.prevState.factorial || resPower !== self.prevState.power || resLog !== self.prevState.log || resSqrt !== self.prevState.sqrt || resBasic !== self.prevState.basic) {


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