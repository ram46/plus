import React from 'react';
import ReactDOM from 'react-dom';


class Find extends React.Component {
  constructor(props) {
    super(props)
    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      link: ''
    }
  }


onChange(e) {
  this.setState({
    link: e.target.value
  });
}

handlePlayClick() {
  this.props.search(this.state.link)
}


render() {
  return (<div>
     <p> youTube link </p> <input value={this.state.link} onChange={this.onChange} />
     <button onClick={this.handlePlayClick}> Play </button>
    </div>)
 }

}


export default Find
