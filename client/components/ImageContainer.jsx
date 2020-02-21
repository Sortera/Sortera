import React, { Component } from 'react';
import '../../assets/imageContainer.css';
import SorteraLogo from '../../assets/SorteraLogo.png';

export default class ImageContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="imageContainer">
        <img id="centerLogo" src={SorteraLogo} />
      </div>
    );
  }
}
