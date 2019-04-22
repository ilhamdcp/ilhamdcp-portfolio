import React, { Component } from 'react';
import '../App.css';
import './LanguageSection.css';

class LanguageSection extends Component {
  render() {
    return (
      <div className="LanguageSection">
        <div className="Container">
          <h2>Language I've used or familiar with</h2>
          <div className="languages">Java</div>
          <div className="languages">Python</div>
          <div className="languages">Ruby</div>
          <div className="languages">Javascript</div>
          <div className="languages">PostgreSQL</div>
          <div className="languages">MongoDB</div>
          <div className="languages">Bash</div>
        </div>
      </div>
    );
  }
}

export default LanguageSection;