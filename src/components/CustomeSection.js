import React, { Component } from 'react';
import '../styles/App.css';
import CustomGrid from './CustomGrid';
import SectionTitle from './SectionTitle';

class CustomeSection extends Component {
    render() {
        return (
            <section className="wrapper-custome-section">
                <SectionTitle
                    sectionTitleContent={this.props.sectionTitleContent}
                    sectionTitleLink={this.props.sectionTitleLink}
                />
                <CustomGrid
                hiddePlayItem1={this.props.hiddePlayItem1}
                hiddePlayItem2={this.props.hiddePlayItem2}
                hiddePlayItem3={this.props.hiddePlayItem3}
                hiddePlayItem4={this.props.hiddePlayItem4}
                hiddePlayItem5={this.props.hiddePlayItem5}
                categoryItem1={this.props.categoryItem1}
                categoryItem2={this.props.categoryItem2}
                categoryItem3={this.props.categoryItem3}
                categoryItem4={this.props.categoryItem4}
                categoryItem5={this.props.categoryItem5}
                titleSizeItem1={this.props.titleSizeItem1}
                titleSizeItem2={this.props.titleSizeItem2}
                titleSizeItem3={this.props.titleSizeItem3}
                titleSizeItem4={this.props.titleSizeItem4}
                titleSizeItem5={this.props.titleSizeItem5}
                titleTextItem1={this.props.titleTextItem1}
                titleTextItem2={this.props.titleTextItem2}
                titleTextItem3={this.props.titleTextItem3}
                titleTextItem4={this.props.titleTextItem4}
                titleTextItem5={this.props.titleTextItem5}
                hideItem4={this.props.hideItem4}
                hideItem5={this.props.hideItem5}
                img1={this.props.img1}
                gridSize={this.props.gridSize}
                item1Image={this.props.item1Image}
                item2Image={this.props.item2Image}
                item3Image={this.props.item3Image}
                item4Image={this.props.item4Image}
                item5Image={this.props.item5Image}
                />
            </section>
        );
    }
}

export default CustomeSection;