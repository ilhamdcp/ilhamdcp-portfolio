import React, { Component } from 'react';
import '../App.css';
import './DescriptionSection.css';

class DescriptionSection extends Component {
  render() {
    return (
      <div className="DescriptionSection">
        <div className="Description">
          <h2 className="Name"><strong>Ilham Darmawan</strong></h2>
          <p>I am a computer science student in Fasilkom UI. Like to do some jogging very much, especially at GBK.
            I like full stack web development (of course) and interested in machine learning. Regression, classification, you name it.
            I am also interested in data science & analytics. You can call me full stack of full stack.
          </p>
        </div>
      </div>
    );
  }
}

export default DescriptionSection;