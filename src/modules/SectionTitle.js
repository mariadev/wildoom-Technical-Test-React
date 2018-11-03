import React, { Component } from 'react';

class SectionTitle extends Component {
  render() {
    return (
      <div className="wrapper-section-title">
      <p className="section">{this.props.title}</p>
      <div className="link">
      <a className="link__title"
      href="/index.html">{this.props.title}</a>
      <div className="link__icon" >
        <i className="link__icon arrow right"></i>
      </div>
      </div>
      </div>
    );
  }
}

export default SectionTitle ;