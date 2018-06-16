import React from 'react';
import ReactDOM from 'react-dom';


class SquareRoot extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      val: ''
    }
  }
    onChange(e) {
      this.setState({
        val: e.target.value
      })
    }

    onSubmit() {
      this.props.calcSquareRoot(this.state.val, (result) => {
        this.setState({
          val: result
        })
      });
    }

    onKeyPress(e) {
      if (e.keyCode === 13 || e.which === 13) {
        this.onSubmit();
      }
    }


  render() {
    return(<div>
      <h4> SquareRoot</h4>
      <input placeholder='16' value={this.state.val} onChange={this.onChange} onKeyPress={this.onKeyPress} />
      <button onClick={this.onSubmit}> OK </button>
      </div>)
  }
}

export default SquareRoot