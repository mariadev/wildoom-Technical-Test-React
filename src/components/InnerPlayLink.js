import React, { Component } from 'react';
import play from '../images/play-webtv.svg'
class InnerLinkPlay extends Component {
  render() {
    return (
      <div className="inner-play-link">
      <img className="inner-play-link__logo" src={play} alt="play"/>
      </div>
    );
  }
}

export default  InnerLinkPlay ;