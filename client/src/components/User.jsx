import React from 'react';
import ReactDOM from 'react-dom';


function UserGreeting(props) {
  return <h4> Welcome back!</h4>;
}

function AllGreeting(props) {
  return <h4> Enter username for your user view</h4>;
}

function Greeting(props) {
  if (props.userView) {
    return <UserGreeting username={props.username}/>
  }
  return <AllGreeting />

}


class User extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      user: 'all',
      userView: false,

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
    console.log('clicked!')
    this.props.userInfo(this.state.user)  // added to send the username!!
    if (this.state.user !== 'all') {
      this.setState({userView: true})
    }
  }



  render() {

    return (<div>
      <Greeting userView={this.state.userView} username={this.state.user} />
      <input placeholder='all' value={this.state.user} onChange={this.onChange} onKeyPress={this.onKeyPress} />

      </div>)
  }

}

export default User


