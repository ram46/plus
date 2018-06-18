import React from 'react';
import ReactDOM from 'react-dom';

class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.handleStats = this.handleStats.bind(this);
    this.state = {
      topFunc: []
    }
  }

  handleStats() {
    this.props.stats((result) => {
      this.setState({topFunc: result})
    })
  }

  render() {
    return (<div>
      <h3> Top Used Functions </h3>
      {this.handleStats()}
      <div> Stats will appear here {this.state.topFunc} </div>
      </div>)
  }
}


export default Stats