import React, { Component } from 'react';
import '../styles/App.css';
import play from '../images/play-webtv.svg';
import CustomeSection from './CustomeSection';
import img1 from '../images/photo1.png';

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
        img1={img1}
        gridSize="custom-grid-three-elements"
      />
      </div>
    );
  }
}

export default App;
