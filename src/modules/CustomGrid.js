import React, { Component } from 'react';
import InnerLink from './InnerLink';
import InnerLinkPlay from './InnerPlayLink';

class CustomGrid extends Component {
    render() {
        return (
            <div className="custom-grid">
                <div className="item1">
                    <InnerLink
                        category="soy tu matrona"
                        title="Cursos de Educación para Maternidad y Preparación al Parto"
                    />
                </div>
                <div className="item2">
                    <InnerLink
                        category="objetivo empleo"
                        title="2.750 plazas para emfermería en los próximos meses"
                    />
                </div>
                <div className="item3">
                    <InnerLinkPlay />
                    <InnerLink
                        category="alimentación"
                        title="La vuelta al cole y el cambio en las rutinas de alimentación saludable "
                    />
                </div>
            </div>
        );
    }
}

export default CustomGrid;