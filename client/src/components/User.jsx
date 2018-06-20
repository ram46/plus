import React from 'react';
import ReactDOM from 'react-dom';

// function UserView(props) {
//   return (
//     <button onClick={props.onClick}>
//       props.user
//     </button>
//   );
// }


// function AllView(props) {
//   return (
//     <button onClick={props.onClick}>
//       all
//     </button>
//   );
// }



class User extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // this.handleUserViewClick = this.handleUserViewClick.bind(this)
    // this.handleAllViewClick = this.handleAllViewClick.bind(this)

    this.state = {
      user: 'all',
      data: [],
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

  // handleUserViewClick() {
  //   this.setState({userOnly: true});
  // }

  // handleAllViewClick() {
  //   this.setState({userOnly: false});
  // }

  onSubmit() {
    console.log('clicked!!')
    //   this.props.userData(this.state.user, (result) => {
    //     this.state.data = result;
    //     console.log(this.state.data)
    //   })
    var color = prompt("what color to set in your profile? red, yellow, green or blue");
    localStorage.setItem('favColor',color)
    document.getElementById("top").style.backgroundColor = localStorage.getItem('favColor');
    // document.body.style.backgroundColor = localStorage.getItem('favColor');
    document.getElementById("top").style.backgroundColor = localStorage.getItem('favColor');
  }


  render() {

    // var userOnly = this.state.userOnly;
    // var button;

    // if (userOnly) {
    //   button = <UserView onClick={this.handleUserViewClick} />;
    // } else {
    //   button = <AllView onClick={this.handleAllViewClick} />
    // }

    return (<div>
      <input placeholder='all' value={this.state.user} onChange={this.onChange} onKeyPress={this.onKeyPress} />

      </div>)
  }

}

export default User


