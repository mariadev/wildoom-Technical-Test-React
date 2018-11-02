import React, { Component } from 'react';
import InnerLink from './InnerLink';

class CustomGrid extends Component {
    render() {
    return (
        <div className="custom-grid">
        <InnerLink
            category= "soy tu matrona"
            title="Cursos de Educación para Maternidad y Preparación al Parto"
        />
        </div>
    );
    }
}

export default CustomGrid ;