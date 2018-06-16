import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Find from './components/Find.jsx';
import PlayList from './components/PlayList.jsx';
import Player from './components/Player.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.playVideo = this.playVideo.bind(this);
    this.getDuration = this.getDuration.bind(this);

    this.defaultVideo = {
        snippet: {
          title: '',
          description: ''
        },
        contentDetails: {
          duration: 'PT0H00M00S'
        },
        statistics: {
          viewCount: '',
          likeCount: ''
        }
    }

    this.state = {
      links: [],
      video: {
        snippet: {
          title: '',
          description: ''
        },
        contentDetails: {
          duration: 'PT0H00M00S'
        },
        statistics: {
          viewCount: '',
          likeCount: ''
        }
      }
    }
  }


  playVideo() {
    var self = this;
    return function(videoID) {
      console.log('VIDEO ID', videoID)
       $.ajax({
        url: 'http://localhost:1128/video/'+videoID,
        context: self
      })
      .done(function(result){
        var result = JSON.parse(result)
        var video = result['items'][0];
        this.setState({video: this.defaultVideo}) //unsetting state, so can set again with the same state to reload the component, else it'll ignore rendering. Note: It is not needed IF not calling with setInterval
        this.setState({video: video}); //reset
        // // $("#hello").click();
        // this.forceUpdate();
        // this.getDuration()

      })
      .fail(function(err){
        console.log(err);
      })
    }

  }

  search(link) {
    $.ajax({
      url: 'http://localhost:1128/video',
      type: 'POST',
      data: JSON.stringify({link:link}),
      context: this
    })

    .done(function(){
      console.log('link is ', link)
      var videoID = link.match('v=.+')[0].split('=')[1]
      console.log('######', videoID)
      this.playVideo()(videoID) // first time should run quickly
      setInterval(this.playVideo(), 10000, videoID)
      // this.playVideo()(videoID)
      // this.playVideo()(videoID)

    })
    .fail(function(err){
      console.log(err)
    })
  }

  getDuration(time) {
    console.log('here I am ', time)
  }

  render () {
    return (<div>
      <h1>YouTubeLoop</h1>
      <Find search={this.search.bind(this)} />
      <Player video={this.state.video} cb={this.getDuration}/>
      <PlayList />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
