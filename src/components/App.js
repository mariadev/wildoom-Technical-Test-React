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
        gridSize="custom-grid-three-elements"
        item1Image="image1"
        item2Image="image2"
        item3Image="image3"
      />
      </div>
    );
  }
}

export default App;
