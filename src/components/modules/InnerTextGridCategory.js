import React, { Component } from 'react';
class InnerTextCategory extends Component {
    render() {
        return (
                <h4 className="wrapper-text-grid__category">
                    {this.props.category}
                </h4>
        );
    }
}

export default InnerTextCategory;

