import React from 'react';
import ReactDOM from 'react-dom';


// pattern = /^.{2}(\d+H)?(\d+M)?(\d+S)?/
// 'PT1H54M54S'
// > t2
// 'PT19M16S'
// > t3
// 'PT16S'
// > pattern.exec(t)
// [ 'PT1H54M54S', '1H', '54M', '54S', index: 0, input: 'PT1H54M54S' ]
// > pattern.exec(t2)
// [ 'PT19M16S', undefined, '19M', '16S', index: 0, input: 'PT19M16S' ]
// > pattern.exec(t3)
// [ 'PT16S', undefined, undefined, '16S', index: 0, input: 'PT16S' ]
// props.video.contentDetails.duration


class Player extends React.Component {
  constructor(props) {
    super(props)
    this.constructSource = this.constructSource.bind(this);
    // this.state = {
    //   source: 'https://www.youtube.com/embed/${this.props.video.id}',
    //   videoid: ''
    // }
  }

  // componentDidMount() {
  //   this.setState({videoid: this.props.video.id})
  //   this.constructSource()
  // }

  // componentDidUpdate() {
  //   if (this.state.videoid !== this.props.video.id) {
  //     this.constructSource()
  //   }
  // }

  constructSource() {
    console.log('contentDetails is', this.props.video)
    var duration = this.props.video.contentDetails.duration;
    console.log('duration is', duration)
    // if (!duration) return `https://www.youtube.com/embed/${this.props.video.id}`
    var pattern = /^.{2}(\d+H)?(\d+M)?(\d+S)?/;
    console.log('patterm is ', pattern)
    var extractedTime = pattern.exec(duration);
    console.log('extractedTime is ' , extractedTime)
    var hr = extractedTime[1] ? parseInt(extractedTime[1]) * 3600 : 0
    var min = extractedTime[2] ? parseInt(extractedTime[2]) * 60 : 0
    var sec = extractedTime[3] ? parseInt(extractedTime[3]) : 0

    console.log(hr, min, sec)
    var durationSec = hr + min + sec;
    console.log('the dur in sec is ', durationSec)
    this.props.cb(durationSec)
    // this.setState({source: 'https://www.youtube.com/embed/${this.props.video.id}?version=3&start=0&end=${durationSec-2}&autoplay=1'})
    return `https://www.youtube.com/embed/${this.props.video.id}?version=3&start=0&end=${durationSec-2}&autoplay=1`
  }


  render() {
    return (<div>
    <div>
      <iframe src={this.constructSource()} allowFullScreen> </iframe>
    </div>
    <div>
      <h3> {this.props.video.snippet.title} </h3>
      <h4> published: {this.props.video.snippet.publishedAt} </h4>
      <h4> views: {this.props.video.statistics.viewCount}, likes: {this.props.video.statistics.likeCount}</h4>
    </div>
  </div>)
  }

}


Player.propTypes = {
  video: React.PropTypes.object.isRequired
};

export default Player


