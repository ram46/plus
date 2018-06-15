import React from 'react';
import ReactDOM from 'react-dom';

// Player.propTypes = {
//   video: React.PropTypes.object.isRequired
// };

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

//  function Player(props) {
//   // return null
//   return (<div>
//     <div>
//       <iframe src={`https://www.youtube.com/embed/${props.video.id}?version=3&start=60&end=63&autoplay=1`} allowFullScreen> </iframe>
//     </div>
//     <div>
//       <h3> {props.video.snippet.title} </h3>
//       <h4> published: {props.video.snippet.publishedAt} </h4>
//       <h4> views: {props.video.statistics.viewCount}, likes: {props.video.statistics.likeCount}</h4>
//     </div>
//   </div>)

// }

class Player extends React.Component {
  constructor(props) {
    super(props)
  }

  source(duration) {
    if (!duration) return `https://www.youtube.com/embed/${this.props.video.id}`
    var pattern = /^.{2}(\d+H)?(\d+M)?(\d+S)?/;
    var extractedTime = pattern.exec(duration);
    var hr = extractedTime[1] ? parseInt(extractedTime[1] * 3600) : 0
    var min = extractedTime[2] ? parseInt(extractedTime[2] * 60) : 0
    var sec = extractedTime[3] ? parseInt(extractedTime[3]) : 0

    var durationSec = hr + min + sec
    console.log(durationSec)
    durationSec = 5
    return `https://www.youtube.com/embed/${this.props.video.id}?version=3&start=0&end=${durationSec}&autoplay=1`

  }


  render() {
    return (<div>
    <div>
      <iframe src={this.source(this.props.video.contentDetails.duration)} allowFullScreen> </iframe>
    </div>
    <div>
      <h3> {this.props.video.snippet.title} </h3>
      <h4> published: {this.props.video.snippet.publishedAt} </h4>
      <h4> views: {this.props.video.statistics.viewCount}, likes: {this.props.video.statistics.likeCount}</h4>
    </div>
  </div>)
  }

}

export default Player









