import React, { Component } from 'react';
import '../../assets/imageContainer.css';
import TabbedImages from '../components/TabbedImages.jsx'

export default class ImageContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="imageContainer">
        <TabbedImages sendToReducer={this.props.sendToReducer} images={this.props.images}></TabbedImages>
      </div>
    );
  }
}
