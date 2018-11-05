import React, { Component } from 'react';
import '../styles/App.css';
import CustomeSection from './CustomeSection';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomeSection
          sectionTitleContent="Grid de 3 elemetos"
          sectionTitleLink="Ver todas las últimas noticias"
          hiddePlayItem2="hidde"
          categoryItem1="soy tu matrona"
          categoryItem2="objetivo empleo"
          categoryItem3="alimentación"
          containerSize2="container-width__l"
          containerSize3="container-width__l"
          titleSizeItem1="xl"
          titleSizeItem2="l"
          titleSizeItem3="l"
          titleTextItem1="Cursos de Educación para la Maternidad y Preparación al Parto"
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
          sectionTitleContent="Grid de 5 elemetos"
          sectionTitleLink="Ver todas las noticias de Categoría"
          hiddePlayItem2="hidde"
          hiddePlayItem5="hidde"
          categoryItem1="categoría"
          categoryItem2="categoría"
          categoryItem3="categoría"
          categoryItem4="categoría"
          categoryItem5="categoría"
          titleSizeItem1="xl"
          titleSizeItem2="l"
          titleSizeItem3="m"
          titleSizeItem4="m"
          titleSizeItem5="m"
          titleTextItem1="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          titleTextItem2="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
          titleTextItem3="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
          titleTextItem4="In voluptate velit esse cillum dolore eu fugiat nulla pariatur"
          titleTextItem5="Duis aute irure dolor in reprehenderit"
          gridSize="custom-grid-five-elements"
          item1Image="image4"
          item2Image="image6"
          item3Image="image5"
          item4Image="noimage"
          item5Image="noimage"
        />
      </div>
    );
  }
}

export default App;
