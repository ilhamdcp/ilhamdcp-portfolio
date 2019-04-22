import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DescriptionSection from './Description/DescriptionSection';
import LanguageSection from './Language/LanguageSection';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DescriptionSection/>
        <LanguageSection/>
      </div>
    );
  }
}

export default App;
