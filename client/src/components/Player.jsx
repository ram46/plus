import React from 'react';
import ReactDOM from 'react-dom';

// function Player(props) {
//   // return null

//   return (<div className="player">
//     <div className="embed-responsive embed-responsive-16by9">
//       <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${props.video}`} allowFullScreen></iframe>
//     </div>
//     <div className="video-player-details">
//       <h3> {props.video.snippet.title} </h3>
//       <div>{props.video.snippet.description} </div>
//     </div>
//   </div>)

// }

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

 function Player(props) {
  // return null
  return (<div>
    <div>
      <iframe src={`https://www.youtube.com/embed/${props.video.id}?version=3&start=60&end=63&autoplay=1`} allowFullScreen> </iframe>
    </div>
    <div>
      <h3> {props.video.snippet.title} </h3>
      <h4> published: {props.video.snippet.publishedAt} </h4>
      <h4> duration: {props.video.contentDetails.duration} </h4>
      <h4> views: {props.video.statistics.viewCount}, likes: {props.video.statistics.likeCount}</h4>
    </div>
  </div>)

}

export default Player