import React, { Component } from 'react';
import InnerTextGridCategory from './InnerTextGridCategory';
import InnerTextGridTitle from './InnerTextGridTitle';
import PlayLink from './PlayLink';

class CustomGrid extends Component {
    
    render() {
        const styles = {
            img1: {
                background: `linear-gradient(61deg, #000000 0%, rgba(0, 0, 0, 0) 70%),url(${this.props.img1})`,
                backgroundSize: `cover`,
                backgroundPosition: `center`,
            }
        };
        return (
            <div className={`${this.props.gridSize}`}>
                <div className={`${this.props.gridSize} item1`} style={styles.img1}>
                    <div className="wrapper-text-grid">
                        <PlayLink
                            logoGridPlay={this.props.logoGridPlay}
                            hiddePlay={this.props.hiddePlayItem1}
                        />
                        <InnerTextGridCategory
                            category={this.props.categoryItem1}
                        />
                    </div>
                    <InnerTextGridTitle
                        titleSize="xl"
                        title="Cursos de Educación para Maternidad y Preparación al Parto"
                    />

                </div>
                <div className={`${this.props.gridSize} item2`}>
                    <div className="wrapper-text-grid">
                        <PlayLink
                            logoGridPlay={this.props.logoGridPlay}
                            hiddePlay={this.props.hiddePlayItem2}
                        />
                        <InnerTextGridCategory
                            category={this.props.categoryItem2}
                        />
                    </div>
                    <InnerTextGridTitle
                        titleSize="l"
                        title="2.750 plazas para emfermería en los próximos meses"
                    />
                </div>
                <div className={`${this.props.gridSize} item3`}>
                    <div className="wrapper-text-grid">
                        <PlayLink
                            logoGridPlay={this.props.logoGridPlay}
                            hiddePlay={this.props.hiddePlayItem3}
                        />
                        <InnerTextGridCategory
                            category={this.props.categoryItem3}
                        />
                    </div>
                    <InnerTextGridTitle
                        titleSize="l"
                        title="La vuelta al cole y el cambio en las rutinas de alimentación saludable "
                    />
                </div>
            </div>
        );
    }
}

export default CustomGrid;