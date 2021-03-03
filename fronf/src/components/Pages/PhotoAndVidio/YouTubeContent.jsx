import React, { Component } from 'react'
import YouTube from 'react-youtube'

import './styles.css'

class YouTubeContent extends Component {

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  render () {
   const options = {
      height: '390px',
      width: '640px',
      playerVars: {
        autoplay: 2
      }
   } 

   return <YouTube videoId={this.props.id} opts={options} onReady={this._onReady} className="photoandvidio__block--vidio--contetn_youtube" />
  }
}

export default YouTubeContent