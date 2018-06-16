import React from 'react';
import ReactDOM from 'react-dom';


class Basic extends React.Component {
  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);

    this.state = {
      val: ''
    }

  }

  onChange(e) {
    this.setState({
      val: e.target.value
    });
  }

  onKeyPress(e) {
    if (e.keyCode === 13 || e.which === 13) this.onSubmit()
  }

  onSubmit() {
    this.props.calcBasic(this.state.val, (result) => {
      this.setState({val:result})
    })
  }

  render() {
    return (<div>
      <h4> +, -, *, / </h4>
      <input placeholder='2+3' value={this.state.val} onChange={this.onChange} onKeyPress={this.onKeyPress} />
      <button onClick={this.onSubmit}> OK </button>
    </div>)
  }

}

// render() {
//   return (<div>
//      <p> youTube link </p> <input value={this.state.link} onChange={this.onChange} />
//      <button onClick={this.handlePlayClick}> Play </button>
//     </div>)
//  }

// Player.propTypes = {
//   video: React.PropTypes.object.isRequired
// };

export default Basic


