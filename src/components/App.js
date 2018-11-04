import React, { Component } from 'react';
import '../styles/App.css';
import play from '../images/play-webtv.svg';
import CustomeSection from './CustomeSection';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomeSection
          sectionTitleContent="Grid de 3 elemetos"
          sectionTitleLink="Ver todas las últimas noticias"
          logoGridPlay={play}
          hiddePlayItem2="hidde"
          categoryItem1="soy tu matrona"
          categoryItem2="objetivo empleo"
          categoryItem3="alimentación"
          titleSizeItem1="xl"
          titleSizeItem2="l"
          titleSizeItem3="l"
          titleTextItem1="Cursos de Educación para Maternidad y Preparación al Parto"
          titleTextItem2="2.750 plazas para emfermería en los próximos meses"
          titleTextItem3="La vuelta al cole y el cambio en las rutinas de alimentación saludable"
          gridSize="custom-grid-three-elements"
          item1Image="image1"
          item2Image="image2"
          item3Image="image3"
          hideItem4="hidde"
          hideItem5="hidde"
        />
         <CustomeSection
          sectionTitleContent="Grid de 3 elemetos"
          sectionTitleLink="Ver todas las últimas noticias"
          logoGridPlay={play}
          hiddePlayItem2="hidde"
          hiddePlayItem5="hidde"
          categoryItem1="soy tu matrona"
          categoryItem2="objetivo empleo"
          categoryItem3="alimentación"
          titleSizeItem1="xl"
          titleSizeItem2="l"
          titleSizeItem3="l"
          titleTextItem1="Cursos de Educación para Maternidad y Preparación al Parto"
          titleTextItem2="2.750 plazas para emfermería en los próximos meses"
          titleTextItem3="La vuelta al cole y el cambio en las rutinas de alimentación saludable"
          gridSize="custom-grid-five-elements"
          item1Image="image4"
          item2Image="image5"
          item3Image="image4"
          item4Image="image5"
          item5Image="image4"
        />
      </div>
    );
  }
}

export default App;
