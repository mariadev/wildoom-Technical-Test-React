import React, { Component } from 'react';
import '../styles/App.css';
import CustomGrid from '../modules/CustomGrid';
import SectionTitle from '../modules/SectionTitle';

class CustomeSection extends Component {
    render() {
        return (
            <div className="wrapper-custome-section">
                <SectionTitle
                    title="Grid de 3 elemetos"
                    link="Ver todas las últimas noticias"
                />
                <CustomGrid
                />
            </div>
        );
    }
}

export default CustomeSection;