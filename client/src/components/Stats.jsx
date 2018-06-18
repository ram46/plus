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
    this.state = {
      topFunc: [],
    }
  }

  handleStats() {
    this.props.stats((result) => {
      this.setState({topFunc: result})
    })
  }

  render() {
    return (<div>
      <h3> Stats </h3>
      {this.handleStats()}
      <DataList statsData={this.state.topFunc}/>
      </div>)
  }
}


export default Stats