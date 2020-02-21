import React, { Component } from 'react';
import '../../assets/imageContainer.css';

export default class ImageContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div id="imageContainer">{this.props.images}</div>;
  }
}
