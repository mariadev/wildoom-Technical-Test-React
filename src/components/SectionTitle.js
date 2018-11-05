import React, { Component } from 'react';

class SectionTitle extends Component {
  render() {
    return (
      <div className="wrapper-section-title">
        <h2 className="wrapper-section-title__content">{this.props.sectionTitleContent}</h2>
        <div className="link">
          <a className="link__title" href="/index.html">
            {this.props.sectionTitleLink}
          </a>
          <div className="link__icon" >
            <i className="link__icon arrow right"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionTitle;