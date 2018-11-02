import React, { Component } from 'react';

class UpperLink extends Component {
  render() {
    return (
      <div className="upper-link">
      <a className="upper-link__title"
      href="/index.html">{this.props.title}</a>
      <div className="upper-link__icon" >
        <i className="upper-link__icon arrow right"></i>
      </div>
      </div>
    );
  }
}

export default UpperLink ;