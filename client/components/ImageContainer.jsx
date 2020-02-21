import React, { Component } from 'react';
import '../../assets/imageContainer.css';
import SorteraLogo from '../../assets/SorteraLogo.png';
import TabbedImages from './TabbedImages.jsx';

export default class ImageContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let logo = <img id="centerLogo" src={SorteraLogo} />;
    if (this.props.zippedFile) {logo = []}
    return (
      <div id="imageContainer">
        <TabbedImages
          sendToReducer={this.props.sendToReducer}
          images={this.props.images}
        ></TabbedImages>
        {logo}
      </div>
    );
  }
}
