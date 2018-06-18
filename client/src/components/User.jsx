import React from 'react';
import ReactDOM from 'react-dom';

function History(props) {
  if (props.user !== '') {
    return (<div> {props.username} recent queries </div>)
  }

}


class User extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      user: '',
      data: []
    }
  }

  onChange(e) {
    this.setState({user: e.target.value})
  }

  onKeyPress(e) {
    if (e.keyCode === 13 || e.which === 13) {
      this.onSubmit()
    }
  }

  onSubmit() {
    console.log('clicked!!')

    this.props.userData(this.state.user, (result) => {
      this.state.data = result;
      console.log(this.state.data)
    })

  }


  render() {
    return (<div>
      <input placeholder='helen' value={this.state.user} onChange={this.onChange} onKeyPress={this.onKeyPress} />
      <button onClick={this.onSubmit} > OK </button>
      <History username={this.state.user}/>
      </div>)
  }

}

export default User


