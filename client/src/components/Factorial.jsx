import React from 'react';
import ReactDOM from 'react-dom';

class Factorial extends React.Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.onKeyPress = this.onKeyPress.bind(this)
    this.onChange = this.onChange.bind(this)
    this.state = {
      val: ''
    }
  }

  onChange(e) {
    this.setState({val: e.target.value})
  }


  onSubmit() {
    this.props.calcFactorial(this.state.val, (result) => {
      this.setState({val: result})
    })
  }

  onKeyPress(e) {
    if (e.keyCode === 13 || e.which === 13) {
      this.onSubmit()
    }
  }

  render() {
    return (<div>
      <h4> Factorial </h4>
      <input placeholder='5' value={this.state.val} onChange={this.onChange} onKeyPress={this.onKeyPress}/>
      <button onClick={this.onSubmit}> OK </button>
      </div>)
  }

}

export default Factorial