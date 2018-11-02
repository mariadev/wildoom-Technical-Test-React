import React, { Component } from 'react';
import '../styles/App.css';
import CustomGrid from './CustomGrid';
import UpperLink from './UpperLink';


class App extends Component {
  render() {
    return (
      <div className="App">
      <UpperLink
        title= "Ver todas las últimas noticias"
      />
      <CustomGrid/>
      </div>
    );
  }
}

export default App;
