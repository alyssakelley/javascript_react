import React, { Component } from 'react';
import YouTube from 'react-youtube';
import './Youtube.css';

// Youtube ID for CBT intro video: VoykkM6Baoc

class Youtube extends Component {

  videoOnReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1
      }
    };
 
    const {videoId} = this.props // getting the video ID from the call in App.js

    return (
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={this.videoOnReady}
      />
    );
  }
}

export default Youtube;
