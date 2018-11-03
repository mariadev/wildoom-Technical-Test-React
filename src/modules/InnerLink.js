import React, { Component } from 'react';
import InnerLinkPlay from './InnerPlayLink';
class InnerLink extends Component {
    render() {
        return (
            <div className=" inner-link">
            <div className=" inner-link-wrapper">
            <InnerLinkPlay />
                <h2 className="inner-link-wrapper__category">
                    {this.props.category}
                </h2>
                </div>
                <h1 className="inner-link-wrapper__title">
                    {this.props.title}
                </h1>
            </div>
        );
    }
}

export default InnerLink;