import React, { Component } from 'react';
class InnerTextCategory extends Component {
    render() {
        return (
                <h2 className="wrapper-text-grid__category">
                    {this.props.category}
                </h2>
        );
    }
}

export default InnerTextCategory;

