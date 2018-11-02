import React, { Component } from 'react';
import InnerLinkPlay from './InnerPlayLink';

class InnerLink extends Component {
    render() {
        return (
            <div className=" inner-link">
                <InnerLinkPlay />
                <h2 className="inner-link__category">
                    {this.props.category}
                </h2>
                <h1 className="inner-link__title">
                    {this.props.title}
                </h1>
            </div>
        );
    }
}

export default InnerLink;