import React, { Component } from 'react';
import InnerTextGridCategory from './modules/InnerTextGridCategory';
import InnerTextGridTitle from './modules/InnerTextGridTitle';
import PlayLink from './modules/PlayLink';

class CustomGrid extends Component {

    render() {
        return (
            <div className={`${this.props.gridSize}`}>
                <article className={`${this.props.gridSize} item1 ${this.props.item1Image}`} >
                    <div className="wrapper-text-grid">
                        <PlayLink
                            hiddePlay={this.props.hiddePlayItem1}
                        />
                        <InnerTextGridCategory
                            category={this.props.categoryItem1}
                        />
                    </div>
                    <InnerTextGridTitle
                        titleSize={this.props.titleSizeItem1}
                        title={this.props.titleTextItem1}
                    />

                </article>
                <article className={`${this.props.gridSize} item2 ${this.props.item2Image}`}>
                    <div className="wrapper-text-grid">
                        <PlayLink
                            hiddePlay={this.props.hiddePlayItem2}
                        />
                        <InnerTextGridCategory
                            category={this.props.categoryItem2}
                        />
                    </div>
                    <InnerTextGridTitle
                        titleSize={this.props.titleSizeItem2}
                        title={this.props.titleTextItem2}
                    />
                </article>
                <article className={`${this.props.gridSize} item3 ${this.props.item3Image}`}>
                    <div className="wrapper-text-grid">
                        <PlayLink
                            hiddePlay={this.props.hiddePlayItem3}
                        />
                        <InnerTextGridCategory
                            category={this.props.categoryItem3}
                        />
                    </div>
                    <InnerTextGridTitle
                        titleSize={this.props.titleSizeItem3}
                        title={this.props.titleTextItem3}
                    />
                </article>
                <article className={`${this.props.gridSize} item4 ${this.props.item4Image} ${this.props.hideItem4}`}>
                    <div className="wrapper-text-grid">
                        <PlayLink
                            hiddePlay={this.props.hiddePlayItem4}
                        />
                        <InnerTextGridCategory
                            category={this.props.categoryItem4}
                        />
                    </div>
                    <InnerTextGridTitle
                        titleSize={this.props.titleSizeItem4}
                        title={this.props.titleTextItem4}
                    />
                </article>
                <article className={`${this.props.gridSize} item5 ${this.props.item5Image} ${this.props.hideItem5}`}>
                    <div className="wrapper-text-grid">
                        <PlayLink
                            hiddePlay={this.props.hiddePlayItem5}
                        />
                        <InnerTextGridCategory
                            category={this.props.categoryItem5}
                        />
                    </div>
                    <InnerTextGridTitle
                        titleSize={this.props.titleSizeItem5}
                        title={this.props.titleTextItem5}
                    />
                </article>
            </div>
        );
    }
}

export default CustomGrid;