import React, { Component } from 'react';
import '../styles/App.css';
import CustomGrid from '../modules/CustomGrid';
import SectionTitle from '../modules/SectionTitle';

class CustomeSection extends Component {
    render() {
        return (
            <section className="wrapper-custome-section">
                <SectionTitle
                    sectionTitleContent={this.props.sectionTitleContent}
                    sectionTitleLink={this.props.sectionTitleLink}
                />
                <CustomGrid
                logoGridPlay={this.props.logoGridPlay}
                hiddePlayItem1={this.props.hiddePlayItem1}
                hiddePlayItem2={this.props.hiddePlayItem2}
                hiddePlayItem3={this.props.hiddePlayItem3}
                categoryItem1={this.props.categoryItem1}
                categoryItem2={this.props.categoryItem2}
                categoryItem3={this.props.categoryItem3}
                img1={this.props.img1}
                gridSize={this.props.gridSize}
                item1Image={this.props.item1Image}
                item2Image={this.props.item2Image}
                item3Image={this.props.item3Image}
                />
            </section>
        );
    }
}

export default CustomeSection;